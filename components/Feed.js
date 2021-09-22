import InputBox from "./mainFeed/InputBox"
import Stories from "./mainFeed/Stories"

function Feed() {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
            {/* stories */}
        
           <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
            <Stories />
            {/* input */}
            <InputBox />
           </div>
            
            {/* feed */}
        </div>
    )
}

export default Feed