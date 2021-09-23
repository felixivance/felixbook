import { getSession } from 'next-auth/client';
import Head from 'next/head'
import Feed from '../components/Feed';
import Header from '../components/header/Header'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import {db} from '../firebase'


export default function Home({posts}) {

  // if(!session) return <Login/>;

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Felix Book (FB 2.0)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header /> 
      <div className="flex">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed posts={posts}/>
        {/* widgets */}
        <Widgets />
      </div>
      
    </div>
  )
}

export async function getServerSideProps(context){
  // get posts to enable server side render to be lightning fast
 const posts = await db.collection("posts").orderBy('timestamp', 'desc').get();

 const docs = posts.docs.map(post=>({
  id: post.id,
  ...post.data(),
  timestamp:null
  }))

  return {
    props:{
      posts:docs
    }
  }
} 
