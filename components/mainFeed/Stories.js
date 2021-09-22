import StoryCard from "./StoryCard";

function Stories() {

    const stories =[
        {
            name:'Felix Ivance',
            src: "https://media-exp1.licdn.com/dms/image/C4D03AQFV0DqAcwr22w/profile-displayphoto-shrink_400_400/0/1631773953399?e=1637798400&v=beta&t=EWcTUi2IGsif6zxrBxmpuoJjaizog3cRo04wGwrP-Zs",
            profile:"https://media-exp1.licdn.com/dms/image/C4D03AQFV0DqAcwr22w/profile-displayphoto-shrink_400_400/0/1631773953399?e=1637798400&v=beta&t=EWcTUi2IGsif6zxrBxmpuoJjaizog3cRo04wGwrP-Zs"
        },
        {
            name:'Elon Musk',
            src: "https://links.papareact.com/4zn",
            profile:"https://links.papareact.com/kxk"
        },
        {
            name:'Jeff Bezos',
            src: "https://links.papareact.com/k2j",
            profile:"https://links.papareact.com/f0p"
        },
        {
            name:'Mark Zuckerberg',
            src: "https://links.papareact.com/xql",
            profile:"https://links.papareact.com/snf"
        },
        {
            name:'Bill Gates',
            src: "https://links.papareact.com/4u4",
            profile:"https://links.papareact.com/zvy"
        }
    ];

    return (
        <div className="flex  justify-center space-x-3 mx-auto">
            {
                stories.map((story,key)=>(
                    
                    // story card
                    <StoryCard key={key} name={story.name} src={story.src} profile={story.profile}/>
                ))
            }
        </div>
    )
}

export default Stories
