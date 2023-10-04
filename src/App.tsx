import React from "react";

// the app routing starts here with these imports
import {
    BrowserRouter as Router,
    useRoutes,
} from "react-router-dom";

// will keep the css here
import "./App.css";
import "./assets/css/Main.css";
import "./assets/css/Mobile.css";

// will keep all the screen imports here 
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";

// defining the app routing
const AppRoutes = () => {
    const routes = useRoutes(
        [
            { path: "/", element: <HomeScreen /> },
        ]
    )

    return routes;

}

const App: React.FC<{}> = (): JSX.Element => {
    return <Router>
        <AppRoutes />
    </Router>
}

// i haven't exactly worked with figma - i believe there's a huge posibility that maybe i missed dimensions or colors
// please put up with me in that - i could learn quickly with time.


export default App;