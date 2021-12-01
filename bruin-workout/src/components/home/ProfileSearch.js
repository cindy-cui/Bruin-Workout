import db from '../Database';
import {collection, query, where,getDocs} from "firebase/firestore";
import { useState } from 'react';
import auth from '../Auth';
import { getData } from '../UserData';

export default function ProfileSearch(){
    //declare two state variables, one showing the results of a profile search by username called profileList
    //The other state variable searchResults shows the specific profile information.
    const [profileList,setProfileList] = useState([]);
    const [searchResults, setSearchResults]= useState(<div/>);
    let search_username=null;
    async function searchUsername(){ //receives user input and looks for users with the exact username
        setSearchResults(<div/>);//clear the results of a previous search
        search_username=document.getElementById("search_username").value;
        if (search_username==="") return; //if nothing was typed return
        try{
            const usersRef=collection(db, "users");
            const q = query(usersRef, where("username","==",search_username)); //returns a Query with documents
            //where the username field is equal to search_username
            const querySnapshot = await getDocs(q);//returns QuerySnapshot
            let profiles=[]; //profiles will contain buttons that will show the information of each 
            //found user with search_username
            querySnapshot.forEach( (doc) => {//other_username represents the username for each found user
                //for now, we only check for username equality so by definition each username will 
                //be the same as search_username
                let other_username=doc.get("username");
                if(auth.currentUser.uid!==doc.id)
                profiles.push(<div>
                    <button onClick={()=>{showProfile(doc.id)}}>
                        {other_username}
                    </button>
                </div>);
            });
            if(profiles.length===0){
                setProfileList(<div>No results</div>);
            }
            else{
            setProfileList(profiles); //force the DOM to rerender by updating the profile list with
            //the results of our search
            }
        }
        catch{
            console.log("error");
            return;
        }
    }
    async function showProfile(id){//this method gives profile information from each search result
        //after the corresponding button is clicked
        const result= await getData(id);
        setSearchResults(<div className="profile-search-results">
            <ul>
                <li>Username: {result.username}</li>
                <li>Age: {result.age}</li>
                <li>Height: {result.height}</li>
                <li>Ethnicity: {result.ethnicity}</li>
                <li>Gender: {result.gender}</li>
                <li>Favorite Workout: {result.favWorkout}</li>
            </ul>
            <button onClick={()=>{setSearchResults(<div/>) }}> Close </button>
        </div>);//the Close button clears searchResults by setting it to an empty div
    }
    
    return(<div id="profile-search-container">
        <input placeholder="Search for profile" id="search_username"/>
        <button onClick={()=>searchUsername()}>Search</button> 
        <br/>
        <div class="profile-list">
            {profileList}
            {searchResults}
        </div>
    </div>);
}