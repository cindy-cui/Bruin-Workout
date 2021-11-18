import NavigationBar from '../components/NavigationBar';
import auth from '../components/Auth';

export default function Home(props){ //props.id stores the current user's id
    function display(){
        let user=auth.currentUser;
        if(user===null)
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
