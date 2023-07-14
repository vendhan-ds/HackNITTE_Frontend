import {Profile, NativeContest,Contest, LeaderBoard,Home,ComingSoon} from "../Pages";


const protectedRoutes = [
    {
        title:"Coming soon",
        path:"/learn",
        description:"comingsoon",
        element:<ComingSoon/>,
    },
    {
        title : "Profile",
        path : "/profile",
        description : "Profile Page",
        element  : <Profile />,
    },
    {
        title : "Native Contests",
        path : "/nativeContest",
        description : "Native Contest Page",
        element  : <NativeContest />,
    },
    {
        title : "Contests",
        path : "/contest",
        description : "Pre Contest Page",
        element  : <Contest />,
    },
    {
        title : "LeaderBoard",
        path : "/leaderboard",
        description : "Leaderboard Page",
        element  : <LeaderBoard />,
    },
    {
        title:"User home",
        path:"/home",
        description:" ",
        element:<Home/>,
    },
    {
        title:"User profile",
        path:"/prof",
        description:" ",
        element:<Profile/>,
    }
];


export default protectedRoutes;