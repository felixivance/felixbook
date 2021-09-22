import Image from 'next/image'

function Loading() {
    return (
        <div className="flex flex-col h-[100vh] justify-center my-auto mx-auto bg-gray-800 ">
            <Image src="https://links.papareact.com/t4i"height={400} width={400}  objectFit="contain" className="p-20 mb-4  animate-bounce transition ease-in-out z-50"  />
            <p className="flex justify-center animate-pulse text-white">Loading...</p>
        </div>
    )
}

export default Loading
