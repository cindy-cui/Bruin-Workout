import NavigationBar from '../components/NavigationBar';
import auth from '../components/Auth';
//import {userData} from '../components/UserData';

export default function Home(){   
    const user=auth.currentUser;
    function display(){
        if(user.uid===null)
            return "";
        else{
            console.log(user.uid);
            return user.displayName;
        } 
        
    }
    return(<div>
        <NavigationBar page="Home"/>
        <h1>
            Welcome, {display()}
        </h1>
    </div>);
}
