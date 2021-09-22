import { useSession } from "next-auth/client"
import Image from 'next/image';
import { EmojiHappyIcon,  } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { useState } from "react";

function InputBox() {
    const [session] = useSession();

    const [input,setInputState] =  useState('');
    const inputRef = useRef(null);
    
    const sendPost = e =>{
        e.preventDefault();
        
        console.log("sent message");
    }
    return (
        <div className="bg-white p-2 mt-6 rounded-2xl shadow-md font-medium">
           <div className="flex space-x-4 p-4 items-center">
           {
               session && (
                <Image src={session.user.image} className="rounded-full" width={40} height={40} layout="fixed"/>
               )
           }
           <form className="flex flex-1">
               <input type="text" placeholder={`whats on your mind ${session ? session.user.name : ''} ?`} 
               className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"/>
               <button type="submit" className="hidden" onClick={sendPost}></button>
           </form>

            
           </div>

           <div className="flex space-x-3 justify-evenly p-3 border-t">
               <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500 " />
                    <p className="text-xs md:text-sm xl:text-base">
                        Live Video
                    </p>
               </div>
               <div className="inputIcon">
                    <CameraIcon className="h-7 text-green-500 " />
                    <p className="text-xs md:text-sm xl:text-base">
                        Photo / Video
                    </p>
               </div>
               <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300 " />
                    <p className="text-xs md:text-sm xl:text-base">
                        Feeling Happy
                    </p>
               </div>
               
           </div>

        </div>
    )
}

export default InputBox
