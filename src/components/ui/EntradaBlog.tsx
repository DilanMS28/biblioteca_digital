import Image from "next/image"

type EntradaBlogProps = {
    title: string;
    description: string;
    image: string;
    url: string;
    readTime: number;
}

export default function EntradaBlog({ title, description, image, url, readTime }: EntradaBlogProps) {
    return (
        <article className="bg-gray-100 rounded-4xl shadow-lg overflow-hidden border border-gray-200 flex flex-col transition hover:shadow-2xl">
            <div className="relative h-72 rounded-t-4xl overflow-hidden">
                <Image
                    src={image}
                    alt="Imagen Entrada de Blog"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="w-full h-full object-cover rounded-t-4xl"
                />

                {/* Etiqueta "Lectura" */}
                <span className="absolute top-4 left-4 bg-blue-400 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                    Lectura
                </span>
            </div>
            <div className="flex-1 flex flex-col p-8 pb-2">
                <h4 className="text-2xl font-bold mb-2 text-slate-900 text-center">{title}</h4>
                <p className="text-lg text-slate-600 mb-6">{description}</p>
            </div>
            <div className="border-t border-slate-200 px-8 py-4 flex items-center justify-between bg-gray-100">
                <span className="text-sm italic text-gray-400">{readTime} min de lectura</span>
                <a href={url}  className="text-blue-400 font-bold flex items-center gap-1 hover:underline hover:text-blue-500 transition">
                    Leer más <span aria-hidden="true">→</span>
                </a>
            </div>
        </article>
    )
}
