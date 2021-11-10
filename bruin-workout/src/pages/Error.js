import NavigationBar from "../components/NavigationBar";

export default function Error(){
    return(<div>
        <NavigationBar page="Error"/>
        <h1>
            Oops
        </h1>
        <p>
            The page you're looking for has not been found.
        </p>
    </div>);
}