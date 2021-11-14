import NavigationBar from '../components/NavigationBar';
import ProfileInformation from '../components/ProfileInformation';
import UpdateProfile from '../components/UpdateProfile';

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