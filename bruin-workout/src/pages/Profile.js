import '../styles/Profile.css';
import NavigationBar from '../components/NavigationBar';
import ProfileInformation from '../components/profile/ProfileInformation';
import UpdateProfile from '../components/profile/updateProfile';
import auth from '../components/Auth';

export default function Profile(){
    //get the user and their id
    let user=auth.currentUser;
    let id="";
    if(user!==null){
        id=user.uid;
    }
    return(<div>
        <NavigationBar page="Profile"/>
        <h1>
            Profile
        </h1>
        <ProfileInformation id={id}/>
        <UpdateProfile id={id}/>
    </div>);
}