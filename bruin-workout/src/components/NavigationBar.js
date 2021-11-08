import {Link} from "react-router-dom";

function NavigationBar() {
        return(<div className="navigation">
            <ul>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/login">Log in </Link></li>
            <li><Link to="/signup">Sign up </Link></li>
            <li><Link to="/myprofile">My Profile </Link></li>
            </ul>
          </div>);
  };

  export default NavigationBar;