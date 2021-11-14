import NavigationBar from '../components/NavigationBar';
import auth from '../components/Auth';
import { userData } from '../components/UserData';

export default function Home(){    
    const user= auth.currentUser;
    let displayName="";
    if(user!==null){
        console.log(user.displayName);
        displayName=user.displayName;
    }
    else{
        displayName="null";
    }
    return(<div>
        <NavigationBar page="Home"/>
        <h1>
            Welcome, {userData.username}
        </h1>
    </div>);
}
