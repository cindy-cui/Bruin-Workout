import '../styles/Login.css';
import rockSerious from '../assets/rock-serious.jpeg';
import rockSmiling from '../assets/rock-smiling.jpeg';
import rockFlexing from '../assets/rock-flexing.png';
import LoginPrompts from '../components/login/LoginPrompts';

export default function LoginPages() {
    return (
        <div className="login-page">
            <h1>Face Off</h1>
            <br></br>
            <h4>Welcome</h4>
            <form>
                <img src={rockSerious} alt="" className="rock-serious"/>
                <img src={rockFlexing} alt="" className="rock-flexing1"/>
                <img src={rockFlexing} alt="" className="rock-flexing2"/>
                <img src={rockSmiling} alt="" className="rock-smiling"/>
                <LoginPrompts />
            </form>
        </div>
    );
}
