import NavigationBar from '../components/NavigationBar';
import auth from '../components/Auth';

export default function Home(){
    async function getName(){
   
    const user=await auth.currentUser.displayName;
    return user;
}
    return(<div>
        <NavigationBar page="Home"/>
        <h1>
            Welcome, {auth.name}
        </h1>
    </div>);
}
