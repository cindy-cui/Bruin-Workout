import NavigationBar from '../components/NavigationBar';
import ProfileInformation from '../components/ProfileInformation';

export default function Profile(){
    return(<div>
        <NavigationBar page="Profile"/>
        <h1>
            Profile
        </h1>
        <ProfileInformation />
    </div>);
}