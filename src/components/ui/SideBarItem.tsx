import Link from "next/link";

type SideBarItemType = {
    text: string;
    icon: string;
    href: string;
}

export default function SideBarItem({ text, icon, href }: SideBarItemType) {
    return (
        <Link href={href} className="group block">
            <div className="flex items-center justify-start gap-4 mb-4 px-2 p-2 hover:bg-blue-400 rounded-4xl hover:text-white w-full transition-colors duration-150">
                <i className={`bi ${icon} text-slate-600 text-2xl  group-hover:text-white transition-colors duration-150`}></i>
                <span className="group-hover:text-white group-hover:font-bold sm:inline text-lg">{text}</span>
            </div>
        </Link>
   
    )
}
