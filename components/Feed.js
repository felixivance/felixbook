import InputBox from "./mainFeed/InputBox"
import Posts from "./mainFeed/Posts"
import Stories from "./mainFeed/Stories"

function Feed({posts}) {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
            {/* stories */}
        
           <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
            <Stories />
            {/* input */}
            <InputBox />
            {/* posts */}
            <Posts posts={posts} />
           </div>
            
            
        </div>
    )
}

export default Feed
