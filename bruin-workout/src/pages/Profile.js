import NavigationBar from '../components/NavigationBar';

//NEED TO USE USER OBJECTS 


import userObject from '../components/LoginPrompts'
//TO DO !!  
//let userObject be a user created when logged in or signed up



export default function Profile(){
    return(<div>
        <NavigationBar page="Profile"/>
        <h1>
            Profile
        </h1>

        <h3>
            Username: 
                <script>userObject.userName()</script>
        </h3>
        <h3>
            Age: 
                <script>userObject.userAge()</script>
        </h3>

        <h3> 
            Ethnicity: 
                <script>userObject.userEthnicity()</script>
        </h3>

        <h3> 
            Height: 
                <script>userObject.userHeight()</script>
        </h3>

        <h3> 
            Gender: 
                 <script>userObject.userGender()</script>
        </h3>

        <h3> 
            Favorite Workout: 
                <script>userObject.userFavWorkout()</script>
        </h3>



    </div>);
}