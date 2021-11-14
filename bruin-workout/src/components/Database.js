import app from "./FirebaseConfig";
import {getFirestore} from "firebase/firestore";
const db = getFirestore(app);
export default db;

