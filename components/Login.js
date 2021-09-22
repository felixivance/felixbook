import Image from 'next/image';
import { auth, db, provider } from '../firebase';
import firebase from "firebase";

function Login() {
    const  signIn  =()=>{
        
        auth.signInWithPopup(provider).then((response)=>{
            console.log(response);
            db.collection('users').doc(response.user.uid).set({
                email: response.user.email,
                lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
                photoUrl: response.user.photoURL,
                displayName: response.user.displayName
              }).then((res)=>{
                  
              })
        }).catch(alert);
       
    }

    return (
        <div className="grid place-items-center">
            <Image src="https://links.papareact.com/t4i" height={400} width={400} objectFit="contain"/>
            <h1 className="p-4 bg-blue-500 rounded-md text-white
            text-center" onClick={signIn}>Login to Felix Book</h1>
        </div>
    )
}

export default Login
