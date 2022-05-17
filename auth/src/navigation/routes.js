import React, { lazy, Suspense } from "react";
import { logOut } from "../data/firebase";
import Spinner from "../library/Spinner"
const Login = lazy(
    () => import('../components/Login')
);
const Register = lazy(
    () => import('../components/Register')
);
const Profile = lazy(
    () => import('../components/Profile')
);


const routes = {
    Register: {
        id:11,
		url: "sign-up",
		label: "Register",
		component: (
			<Suspense fallback={<Spinner/>}>
				<Register />
			</Suspense>
		),
        auth: true
	},
	Login: {
        id:12,
		url: "sign-in",
		label: "Login",
		component: (
			<Suspense fallback={<Spinner/>}>
				<Login />
			</Suspense>
		),
        auth: true
	},
    Profile: {
        id:13,
		url: "profile",
		label: "Profile",
		component: (
			<Suspense fallback={<Spinner/>}>
				<Profile />
			</Suspense>
		),
		auth: false
	},
    Logout: {
        id:14,
		url: "",
		label: "Log Out",
		onClick: logOut,
        auth: false
	},
    
};

export default routes;