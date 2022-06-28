import React, { lazy, Suspense } from "react";
import Spinner from "../src/components/Spinner";
import Home from '../src/components/Home.js';

  
const Resources = lazy(
    () => import('Resources/App')
  );


const routes = {
    Main: {
        id:1,
		url: "",
		label: "Home",
		component: (
			<Suspense fallback={<Spinner/>}>
				<Home />
			</Suspense>
		)
	},
	Resources: {
        id:3,
		url: "resources",
		label: "Resources",
		component: (
			<Suspense fallback={<Spinner/>}>
				<Resources />
			</Suspense>
		)
	}
};

export default routes;