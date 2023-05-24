import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";
import Events from "../components/Events";
import VolunteerData from "../components/VolunteerData";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', 
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/volunteerData')

            },
            {
                path: 'volunteer', 
                element: <VolunteerData></VolunteerData>
            }
        ]
    },
    {
        
            path: 'events',
            element: <Events></Events>
        
    }
])

export default router;