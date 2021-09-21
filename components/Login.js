import { signIn } from 'next-auth/client';
import Image from 'next/image';

function Login() {
    return (
        <div className="grid place-items-center">
            <Image src="https://links.papareact.com/t4i" height={400} width={400} objectFit="contain"/>
            <h1 className="p-4 bg-blue-500 rounded-md text-white
            text-center" onClick={signIn}>Login to Felix Book</h1>
        </div>
    )
}

export default Login
