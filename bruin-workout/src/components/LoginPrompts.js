import {useNavigate} from "react-router-dom";

export default function LoginPrompts(){
    let navigate=useNavigate();
    async function handleSignin(){
    navigate("/signup");
    }


    return(<div>
                <div class="login-field">
                    <label for="userEmail"></label>
                    <input placeholder="Email Address"></input>
                </div>
                <div class="login-field">
                    <label for="userPassword"></label>
                    <input type="password" placeholder="Password"></input>
                </div>
                <div class="login-buttons">
                    <input type="submit" value="LOG IN" class="login-button"/>
                    <br/>
                   <input type="submit" value="SIGN UP" class="login-button" onClick={handleSignin}/>
                </div>
        </div>);
}

