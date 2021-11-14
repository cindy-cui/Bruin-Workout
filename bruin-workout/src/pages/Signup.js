import NavigationBar from "../components/NavigationBar";
import SignupPrompts from "../components/SignupPrompts";

export default function Signup(){
    return(<div className="Signup">
        <NavigationBar page="Signup" />
        <h1>
            Sign up
        </h1>
        <SignupPrompts />
    </div>
    );
}