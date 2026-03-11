import clsx from "clsx";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    className?: string;
}

export default function InputText({ type = "text", className, ...props }: InputTextProps) {

    const defaultClass = "w-full rounded-lg p-3 py-3.5 px-5 border border-[#BABABA] place"

    return (
        <div className="w-full">
            <input
                type={type} 
                className={clsx(defaultClass, className)} 
                {...props}/>
        </div>
    );
}