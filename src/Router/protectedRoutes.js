import {Profile, NativeContest, LeaderBoard} from "../Pages";


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
];


export default protectedRoutes;