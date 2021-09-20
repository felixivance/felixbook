import Image from 'next/image';
import { BellIcon,ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from "@heroicons/react/solid";
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon';

function Header() {
    return (
        <div className="flex sticky top-0 bg-white z-50 items-center p-2 lg:px-5 shadow-md">
            {/* header left */}
            <div className="flex space-x-1  items-center">
                <Image src="https://links.papareact.com/5me" width={40} height={40}
                layout="fixed"/>
                <div className="flex ml-2 border-2 rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 p-1 text-gray-600" />
                    <input type="text" placeholder="Search Felix Book"  className="hidden  md:inline-flex outline-none bg-transparent placeholder-gray-500 flex-shrink"/>
                </div>
            </div>
            {/* input */}
            

            {/* headerc center */}
            <div className="flex justify-center flex-grow items-center">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active  Icon={HomeIcon}/>
                    <HeaderIcon  Icon={FlagIcon}/>
                    <HeaderIcon  Icon={PlayIcon}/>
                    <HeaderIcon  Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            
            {/* header right */}
            <div className="flex items-center sm:space-x-2 justify-center">
                {/* profile pic */}
                <p className="font-semibold whitespace-nowrap pr-2"> Felix Ivance</p>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
            </div>
        </div>
    )
}

export default Header
