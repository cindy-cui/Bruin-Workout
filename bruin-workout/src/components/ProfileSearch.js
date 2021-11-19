import db from '../components/Database';
import {collection, query, where,getDocs} from "firebase/firestore";
import { useState } from 'react';
import auth from './Auth';
export default function ProfileSearch(){
    const [profileList,setProfileList] = useState([]);
    let search_username=null;
    async function submitForm(){
        search_username=document.getElementById("search_username").value;
        console.log(search_username);
        if (search_username===""){
            return;
        }
        try{
            const usersRef=collection(db, "users");
            const q = query(usersRef, where("username", "==", search_username));
            const querySnapshot = await getDocs(q);
            let profiles=[];
            querySnapshot.forEach( (doc) => {
                console.log("doc id is ",doc.id);
                let other_username=doc.get("username");
                if(auth.currentUser.displayName!==other_username)
                profiles.push(<p>
                    {other_username}
                </p>);
            });
            setProfileList(profiles);
        }
        catch{
            console.log("error");
            return;
        }
    } //NOTE ABOUT CSS: Home.css has the styles used for the implementation of the dropdown menu.
        // -Daniel Shim
    return(<div>
        <button onClick={submitForm}/> 
        <input placeholder="Search for profile" id="search_username" onkeyup="filterFunction()"/>
        <br />
        <div class="profile-list">
                {profileList}
        </div>
    </div>);
}