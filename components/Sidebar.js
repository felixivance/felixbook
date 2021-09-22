// import { useSession } from "next-auth/client"
import SidebarRow from "./sidebar/SidebarRow";

import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/outline';
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon} from '@heroicons/react/solid'
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";

function Sidebar() {
    // const [session, loading] = useSession();
    
    const [user] = useAuthState(auth);
   
    if(!user) return <Login />

    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px] space-y-5">
            <SidebarRow src={user?.photoURL} title={user?.displayName}/>
            <SidebarRow Icon={UsersIcon} title="Friends"/>
            <SidebarRow Icon={UserGroupIcon} title="Groups"/>
            <SidebarRow Icon={ShoppingBagIcon} title="Market Place"/>
            <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SidebarRow Icon={CalendarIcon} title="Events"/>
            <SidebarRow Icon={ClockIcon} title="Memories"/>
            <SidebarRow Icon={ChevronDownIcon} title="See More.."/>
        </div>
    )
}

export default Sidebar
