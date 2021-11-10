export default function LoginPrompts(){
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
                    <input type="submit" value="LOG IN" class="login-button"></input><br></br>
                    <input type="submit" value="SIGN UP" class="login-button"></input>
                </div>
        </div>);
}