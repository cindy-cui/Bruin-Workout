import NavigationBar from '../components/NavigationBar';
import auth from '../components/Auth';
import List from '../components/List';
import Information from '../components/Information'

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
        <List />
        <Information />
    </div>);
}
