import Image from 'next/image';

function SidebarRow({src, Icon, title}) {
    return (
        <div className="flex space-x-2 items-center hover:bg-gray-200 rounded-xl cursor-pointer">
            {
                src && (
                    <Image src={src} width={30} height={30} className="rounded-full" layout="fixed" />
                )
            }
            {
                Icon && (
                    <Icon  className="h-8 w-8 rounded-full text-blue-500"  />
                )
            }
            <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>
    )
}

export default SidebarRow
