import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../firebase"
import Widget from "./widgets/Widget"
import { SearchIcon } from "@heroicons/react/outline";
import { DotsCircleHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid"

function Widgets() {
    // get users in the system
    const [users, loading, error]= useCollection(
        db.collection('users').orderBy("timestamp","desc")
    )

    return (
        <div className="hidden lg:flex flex-col w-40">
            <div className="flex justify-between items-center text-gray-500 mb-5 mt-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsCircleHorizontalIcon className="h-6" />
                </div>
            </div>
            {
                users?.docs.map((user,key)=>{
                    <Widget photoUrl={user.photoUrl} key={key} displayName={user.displayName} />
                })
            }
        </div>
    )
}

export default Widgets
