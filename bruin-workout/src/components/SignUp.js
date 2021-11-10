import '../styles/SignUp.css';
import Button from '@mui/material/Button';

export default function SignUpPage() {
    return (
        <div >
            <h1>
                Sign Up
            </h1>
            <form>
                <label>
                    <input type="email" pattern="*@*.(.com|.org|.edu)"
                    placeholder="Email Address" required maxlength="100" autofocus>
                    </input> {/* pattern doesn't work */}
                    <input type="text" placeholder="First Name" required maxlength="100"></input>
                    <input type="text" placeholder="Last Name" required maxlength="100"></input>
                    <input type="password" placeholder="Password" required maxlength="100"></input>
                </label>
            </form>
            <Button variant="outlined">Sign Up</Button>
        </div>
    );
}