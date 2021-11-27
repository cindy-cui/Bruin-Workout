import {getDoc,doc} from "firebase/firestore";
import db from "./Database";

//getData refers to Firestore and asks for a Document with the 
//name of the User's UID(NOT THE SAME AS USERNAME)
//options is an optional parameter in case we only need to return one thing instead of the whole profile
// - Daniel Shim
export async function getData(userID,options=""){
    try{
        const docRef = doc(db, "users", userID);
        const user = await getDoc(docRef);
        if(user.exists()){
            if(options==="username"){
                return user.get("username");
            }
            if(options==="workouts"){
                return user.get("workouts");
            }
            return{
            username:user.get("username"),
            age:user.get("age"),
            height:user.get("height"),
            ethnicity:user.get("ethnicity"),
            gender:user.get("gender"),
            favWorkout:user.get("favWorkout"),
            };
        }
    }
    catch{
        return null;
    }     
  };
