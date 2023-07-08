import {Profile, NativeContest, LeaderBoard,Home} from "../Pages";


const protectedRoutes = [
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