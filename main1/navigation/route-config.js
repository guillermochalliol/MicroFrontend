import React, { lazy, Suspense } from "react";
import Spinner from "../src/components/Spinner";
import Home from '../src/components/Home.js';

  
const StudentResources = lazy(
    () => import('StudentResources/App')
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
	StudentResources: {
        id:3,
		url: "student-resources",
		label: "Resources",
		component: (
			<Suspense fallback={<Spinner/>}>
				<StudentResources />
			</Suspense>
		)
	}
};

export default routes;