import { useSession } from "next-auth/client"
import Image from 'next/image';
import { EmojiHappyIcon,  } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { useRef, useState } from "react";
import { db, storage } from '../../firebase';
import firebase from "firebase";

function InputBox() {
    const [session] = useSession();

    const [input,setInputState] =  useState('');
    const inputRef = useRef(null);
    const filePickerRef= useRef(null);
    const [imageToPost, setImageToPost] = useState('');

    const  sendPost =  e =>{
        e.preventDefault();
        console.log("send post clicked");
        if(!inputRef.current.value) {
            console.log("no value")
        } //if empty return empty

        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()

        }).then((doc)=>{
           if(imageToPost){
               //upload image
               const uploadTask = storage.ref(`posts/${doc.id}`)
               .putString(imageToPost, 'data_url');
               
               removeImage();
            //event, progress, errror, success
               uploadTask.on('state_change', null, error=>console.log(error),()=>{
                   //when upload completes
                   storage.ref('posts').child(doc.id).getDownloadURL().then(url=>{
                       db.collection('posts').doc(doc.id).set({
                           postImage: url
                       },{merge:true})
                   })
               })
           }
        }).catch((error)=>{
            console.log(error)
        })
        //clear the input
        inputRef.current.value ='';
    }
   const addImageToPost =(e)=>{
       console.log("file selected")
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]); //get image in base64
        }
        reader.onload = (readerEvent)=>{
            setImageToPost(readerEvent.target.result);
            
        }
    }

    const removeImage =()=>{
        setImageToPost(null);
    }
    return (
        <div className="bg-white p-2 mt-6 rounded-2xl shadow-md font-medium">
           <div className="flex space-x-4 p-4 items-center">
            {
                session && (
                    <Image src={session.user.image} className="rounded-full" width={40} height={40} layout="fixed"/>
                )
            }
            <form className="flex flex-1">
                <input type="text" placeholder={`whats on your mind ${session ? session.user.name : ''} ?`} 
                className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" ref={inputRef}/>
                <button type="submit" className="hidden" onClick={sendPost}></button>
            </form>
            
            { imageToPost && (
                <div className="flex flex-col filter hover:brightness-105 transition duration-150 transform hover:scale-x-105 cursor-pointer" onClick={removeImage} >
                    <img className="h-10 object-contain" src={imageToPost} alt="" />
                    <p className="text-xs text-red-500 text-center">Remove</p>
                </div>
            )}
            
           </div>

           <div className="flex space-x-3 justify-evenly p-3 border-t">
               <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500 " />
                    <p className="text-xs md:text-sm xl:text-base">
                        Live Video
                    </p>
               </div>
               <div className="inputIcon" onClick={()=>filePickerRef.current.click()}>
                    <CameraIcon className="h-7 text-green-500 " />
                    <p className="text-xs md:text-sm xl:text-base">
                        Photo / Video
                    </p>
                    <input type="file" hidden onChange={addImageToPost} ref={filePickerRef}/>
               </div>
               <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300 " />
                    <p className="text-xs md:text-sm xl:text-base">
                        Feeling Happy
                    </p>
               </div>
               
           </div>

        </div>
    )
}

export default InputBox
