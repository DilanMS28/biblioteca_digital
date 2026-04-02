import {NextRequest, NextResponse} from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest, res: NextResponse) {
    const response = NextResponse.next();
    
    //crear el cliente de supabase
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!,
        {
          cookies: {
            getAll() {
              return req.cookies.getAll()
            },
            setAll(cookiesToSet) {
              cookiesToSet.forEach(({ name, value, options }) =>
                response.cookies.set(name, value, options)
              )
            },
          },
        }
      )

      //obtener el usuario autenticado
      const {data: {user}} = await supabase.auth.getUser();

      const pathName = req.nextUrl.pathname;

      const publicRoutes = ["/auth/login", "/auth/register"];

      const isPublic = publicRoutes.some(route => pathName.startsWith(route));

      //si no esta autenticado
      if(!user && !isPublic){
        return NextResponse.redirect(new URL("/auth/login", req.url));
      }

      //si esta autenticado
      if(user && isPublic){
        return NextResponse.redirect(new URL("/dashboard", req.url))
      }

      return response;



}