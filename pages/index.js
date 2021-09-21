import { getSession } from 'next-auth/client';
import Head from 'next/head'
import Header from '../components/header/Header'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';

export default function Home({session}) {

  if(!session) return <Login/>;

  return (
    <div className="">
      <Head>
        <title>Facebook 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header /> 
      <main className="flex">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        {/* widgets */}
      </main>
      
    </div>
  )
}

export async function getServerSideProps(context){
  //get user
  const session = await getSession(context);

  return {
    props:{
      session:session
    }
  }
} 
