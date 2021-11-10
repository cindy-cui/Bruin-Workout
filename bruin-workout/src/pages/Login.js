import '../styles/Login.css';
import rockSerious from '../assets/rock-serious.jpeg';
import rockSmiling from '../assets/rock-smiling.jpeg';
import rockFlexing from '../assets/rock-flexing.png';

export default function LoginPages() {
    return (
        <div class="login-page">
            <h1>Face Off</h1>
            <br></br>
            <h4>Welcome</h4>
            <form>
                <img src={rockSerious} alt="" class="rock-serious"/>
                <img src={rockFlexing} alt="" class="rock-flexing1"/>
                <img src={rockFlexing} alt="" class="rock-flexing2"/>
                <img src={rockSmiling} alt="" class="rock-smiling"/>
                <div class="login-field">
                    <label for="userEmail"></label>
                    <input placeholder="Email Address"></input>
                </div>
                <div class="login-field">
                    <label for="userPassword"></label>
                    <input type="password" placeholder="Password"></input>
                </div>
                <div class="login-buttons">
                    <input type="submit" value="LOG IN" class="login-button"></input><br></br>
                    <input type="submit" value="SIGN UP" class="login-button"></input>
                </div>
            </form>
        </div>
    );
}
