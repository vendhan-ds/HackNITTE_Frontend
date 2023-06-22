import {Login,Admin,AdminPanel} from "../Pages";


const routes = [
    {
        title : "Login",
        path : "/",
        description : "Login Page",
        element  : <Login />,
    },
    {
        title : "Admin",
        path : "/admin/Login",
        description : "Admin Login Page",
        element  : <Admin />,
    },
    {
        title : "Admin Home",
        path : "/admin/home",
        description : "Admin Panel Page",
        element  : <AdminPanel />,
    },
];


export default routes;