export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-dvh bg-linear-to-b from-[#FDFEFF] to-[#EEEEEE] flex items-center justify-center">
            {children}
        </div>
    );
}