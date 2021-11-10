import '../styles/Login.css';
import rockSerious from '../assets/rock-serious.jpeg';
import rockSmiling from '../assets/rock-smiling.jpeg';
import rockFlexing from '../assets/rock-flexing.png';
import LoginPrompts from '../components/LoginPrompts';
import NavigationBar from '../components/NavigationBar';

export default function LoginPages() {
    return (
        <div class="login-page">
            <NavigationBar page="Login"/>
            <h1>Face Off</h1>
            <br></br>
            <h4>Welcome</h4>
            <form>
                <img src={rockSerious} alt="" class="rock-serious"/>
                <img src={rockFlexing} alt="" class="rock-flexing1"/>
                <img src={rockFlexing} alt="" class="rock-flexing2"/>
                <img src={rockSmiling} alt="" class="rock-smiling"/>
                <LoginPrompts />
            </form>
        </div>
    );
}
