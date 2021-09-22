import { getSession } from 'next-auth/client';
import Head from 'next/head'
import Feed from '../components/Feed';
import Header from '../components/header/Header'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';

export default function Home() {

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
        <Feed />
        {/* widgets */}
      </div>
      
    </div>
  )
}

// export async function getServerSideProps(context){
  //get user
  // const session = await getSession(context);

  // return {
  //   props:{
  //     session:session
  //   }
  // }
// } 
