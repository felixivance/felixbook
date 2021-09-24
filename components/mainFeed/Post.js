import Image from 'next/image';
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';
import { useState} from 'react';

function Post({id, name, message, email, timestamp, image, postImage}) {
    const [counter, setCounter] = useState(0);

   
    return (
        <div className="flex flex-col p-2">
            <div className="bg-white mt-4 rounded-t-2xl shadow-md p-5">
                <div className="flex items-center space-x-2">
                    <img src={image} alt="" width={40} height={40} className="rounded-full"/>
                    <div>
                        <p className="font-medium">{name}</p>
                        {
                            timestamp && (
                                <p className="text-xs text-gray-400">
                                    { new Date(timestamp?.toDate()).toLocaleString()}
                                </p>
                            )
                        }
                    </div>
                </div>
                <p className="pt-4">{message}</p>
            </div>
            {
                postImage && (
                    <div className="relative h-56 md:h-96 bg-white ">
                        <Image src={postImage} layout="fill" objectFit="cover" className="" />
                    </div>
                )
            }

                <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t ">
                    <div className="inputIcon" onClick={()=>setCounter(counter+1)}>
                        <ThumbUpIcon className="h-4"/>
                        <p className="text-xs sm:text-base">Like ({counter})</p>
                    </div>
                    <div className="inputIcon">
                        <ChatAltIcon className="h-4"/>
                        <p className="text-xs sm:text-base">Chat</p>
                    </div>
                    <div className="inputIcon">
                        <ShareIcon className="h-4"/>
                        <p className="text-xs sm:text-base">Share</p>

                     </div>
                 </div>
          
        </div>
    )
}

export default Post
