
import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from '../components/Login';
import Loading from '../components/Loading';
import { auth, db } from '../firebase';
import { useEffect } from 'react';
import firebase from "firebase";

function MyApp({ Component, pageProps }) {
  const [user,loading] = useAuthState(auth);

//when component mounts fire this code
  // firestore.fieldValue.serverTimestamp(),
  useEffect(() => {
    console.log("ka kuna user");
    console.log(user);
    if(user){
    
      db.collection('users').doc(user.uid).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoUrl: user.photoURL,
        name: user.displayName
      })
      
        
    }
  
  }, [])
  
  if(loading) return <Loading />
  
  if(!user) return <Login />

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
