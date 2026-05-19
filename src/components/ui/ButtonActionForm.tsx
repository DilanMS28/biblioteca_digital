import Link from "next/link"

type ButtonActionFormProps = {
    text: string;
    icon?: string;
    href: string;
}

export default function ButtonActionForm({text, icon, href}: ButtonActionFormProps) {
    return (
        <div className="flex items-center justify-end">
            <Link href={href} className="text-white font-bold bg-blue-400 hover:bg-blue-500 px-6 py-3 rounded-4xl cursor-pointer">
                
                {text}
            </Link>
        </div>

    )
}
