import '../styles/Profile.css';
import NavigationBar from '../components/NavigationBar';
import ProfileInformation from '../components/ProfileInformation';
import UpdateProfile from '../components/updateProfile';

export default function Profile(props){
    return(<div>
        <NavigationBar page="Profile"/>
       
        <h1>
            Profile
        </h1>
        <ProfileInformation/>
        <UpdateProfile/>
                
        
    </div>);
}