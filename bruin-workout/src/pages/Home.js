import NavigationBar from '../components/NavigationBar';
import auth from '../components/Auth';
import ProfileSearch from '../components/ProfileSearch';
import {useNavigate} from "react-router-dom";
import { useEffect } from 'react';

export default function Home(props){ //props.id stores the current user's id
    let navigate=useNavigate();
    function display(){
        let user=auth.currentUser;
        if(user===null)
            return "";
        else{
            console.log("User with username", user.displayName,"and ID ",user.uid," is logged in.");
            return user.displayName;
        }
    }
    //if user is not logged in, send user back to login page.
    useEffect(
        ()=>{
            if(auth.currentUser===null){
                navigate("/login");
            }
        }
    );

    return(<div>
        <NavigationBar page="Home"/>
        <h1>
            Welcome, {display()}
        </h1>
        <ProfileSearch />
    </div>);
}
