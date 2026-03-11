import Button from "@/components/button";
import InputText from "@/components/controls/inputText";
import Link from "next/link";

export default function LoginPage() {
    return (
        <form className="w-full max-w-150 bg-white rounded-lg p-10 pb-15 flex flex-col gap-5">
            <div className="flex flex-col items-center py-2.5">
                {/* <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.0627 22.5C59.0627 26.2296 57.5811 29.8065 54.9438 32.4437C52.3066 35.0809 48.7298 36.5625 45.0002 36.5625C41.2705 36.5625 37.6937 35.0809 35.0565 32.4437C32.4192 29.8065 30.9377 26.2296 30.9377 22.5C30.9377 18.7704 32.4192 15.1935 35.0565 12.5563C37.6937 9.91908 41.2705 8.4375 45.0002 8.4375C48.7298 8.4375 52.3066 9.91908 54.9438 12.5563C57.5811 15.1935 59.0627 18.7704 59.0627 22.5ZM16.8789 75.4425C16.9994 68.0638 20.0152 61.0281 25.2758 55.8527C30.5365 50.6772 37.6205 47.7768 45.0002 47.7768C52.3798 47.7768 59.4638 50.6772 64.7245 55.8527C69.9851 61.0281 73.0009 68.0638 73.1214 75.4425C64.2991 79.4879 54.7057 81.5757 45.0002 81.5625C34.9652 81.5625 25.4402 79.3725 16.8789 75.4425Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg> */}
                <h1 className="text-xl font-bold">
                    Welcome!
                </h1>

            </div>

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5 items-center">

                    <div className="flex flex-col gap-2.5 w-full">
                        <label className="text-[#8C8C8C]">
                            Email
                        </label>
                        <InputText type="text" placeholder="Enter your email" />
                    </div>
                    <div className="flex flex-col gap-2.5 w-full">
                        <label className="text-[#8C8C8C]">
                            Password
                        </label>
                        <InputText type="password" placeholder="＊＊＊＊＊＊" />
                    </div>

                    <Link href="/register" className="underline underline-offset-2">
                        Forgot password
                    </Link>
                </div>

                <Button type="submit">
                    Login

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 15V18.75C8.25 19.3467 8.48705 19.919 8.90901 20.341C9.33097 20.7629 9.90326 21 10.5 21H16.5C17.0967 21 17.669 20.7629 18.091 20.341C18.5129 19.919 18.75 19.3467 18.75 18.75L18.75 5.25C18.75 4.65326 18.5129 4.08097 18.091 3.65901C17.669 3.23705 17.0967 3 16.5 3H10.5C9.90326 3 9.33097 3.23705 8.90901 3.65901C8.48705 4.08097 8.25 4.65326 8.25 5.25V9M12 15L15 12M15 12L12 9M15 12L2.25 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>


                </Button>
            </div>
        </form>
    );
}