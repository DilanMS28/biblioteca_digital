type AccordeonProps = {
    title: string;
    text: string;
    icon: string;
}

export default function Accordeon({ title, text, icon }: AccordeonProps) {
    return (
        <details className="group border border-slate-200 rounded-2xl bg-white mb-4 shadow-sm open:shadow-md transition-shadow">
            <summary
                className="flex items-center gap-4 px-4 py-3 cursor-pointer select-none rounded-2xl font-semibold text-base focus-visible:ring-2 focus-visible:ring-blue-300 outline-none"
                style={{ listStyle: 'none' }}
            >
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center rounded-lg bg-blue-400/10 w-10 h-10">
                        <i className={`bi ${icon} text-blue-400 text-2xl`}></i>
                    </div>
                    <span className="text-slate-900 font-bold text-xl">{title}</span>
                </div>
                <span className="ml-auto transition-transform duration-200 text-slate-400">
                    <i className="bi bi-chevron-down text-xl transform transition-transform duration-200 group-open:rotate-180"></i>
                </span>
            </summary>
            <div className="px-14 pt-1 pb-4 text-slate-600 text-lg">
                {text}
            </div>
        </details>
    )
}
