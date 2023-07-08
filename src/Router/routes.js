import {Login,Admin,AdminPanel,Register} from "../Pages";



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
    {
        title : "Register",
        path : "/register",
        description : "Register Page",
        element  : <Register />,
    }
];


export default routes;