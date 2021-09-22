import Image from 'next/image';

function Post({key, name, message, email, timestamp, image, postImage}) {
    
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
                        <Image src={postImage} layout="fill" objectFit="cover" className="rounded-b-2xl" />
                    </div>
                )
            }
        </div>
    )
}

export default Post
