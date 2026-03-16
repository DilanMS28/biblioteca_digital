type AboutCardProps = {
    icon: string;
    title: string;
    text: string;
}

export default function AboutCard({ icon, title, text }: AboutCardProps) {
    return (
        <div className="bg-white rounded-4xl p-8 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center rounded-4xl bg-gray-300/20 w-20 h-20 mb-2">
                <i className={`bi ${icon} text-blue-400 text-4xl`}></i>
            </div>
            <h3 className="text-2xl font-bold my-2">{title}</h3>
            <p className="text-lg text-slate-600 leading-relaxed">{text}</p>
        </div>
    )
}
