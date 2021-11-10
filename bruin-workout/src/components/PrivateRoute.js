import React from 'react';
import { Navigate} from 'react-router-dom';

const PrivateRoute = () => {
    const auth = null; // determine if authorized

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Navigate to="/home" /> : <Navigate to="/login" />;
}
export default PrivateRoute;