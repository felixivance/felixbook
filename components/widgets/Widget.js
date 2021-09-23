import Image from 'next/image';

function Widget({photoUrl,displayName}) {
    return (
        <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer rounded-xl">
            <Image src={photoUrl} layout="fixed" className="rounded-full"  objectFit="cover" width={50} height={50}/>
            <p>{displayName}</p>
            <div className="absolute bottom-1 bg-green-400 h-3 w-3 left-6 rounded-full animate-bounce"></div>
        </div>
    )
}

export default Widget
