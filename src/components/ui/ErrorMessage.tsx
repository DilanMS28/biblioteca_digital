
export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-red-600 p-2 font-bold text-sm text-center">{children}</p>
    )
}
