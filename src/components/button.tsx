import clsx from "clsx"

interface ButtonPros extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    className?: string,
    type?: "submit" | "reset" | "button"
}

export default function Button({children, className, type="button", ...props}: ButtonPros) {

    const defaultClass = "bg-black text-white text-xl py-3 px-5 rounded-lg flex justify-center gap-2.5 cursor-pointer hover:opacity-80"

    return(
        <button type={type} className={clsx(defaultClass, className)} {...props}>
            {children}
        </button>
    )
}