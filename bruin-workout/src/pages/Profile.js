import NavigationBar from '../components/NavigationBar';
import ProfileInformation from '../components/ProfileInformation';

//NEED TO USE USER OBJECTS 


import userObject from '../components/LoginPrompts'
//TO DO !!  
//let userObject be a user created when logged in or signed up



export default function Profile(){
    return(<div>
        <NavigationBar page="Profile"/>
        <h1>
            Profile
        </h1>
        <ProfileInformation />
    </div>);
}