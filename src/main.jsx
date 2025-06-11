import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import HeaderComponent from "./components/HeaderComponent.jsx";
import Jumbotron from "./components/jumbotron.jsx";
import Skill from "./components/Skill.jsx";
import Project from "./components/project.jsx";
import Footer from "./components/Footer.jsx";
import Wrap from "./components/Wrap.jsx"; // Impor komponen Wrap
import MyComponent from "./test/test.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./contexts/AuthProvider.jsx";
import router from "./router.jsx";
 
createRoot(document.getElementById("root")).render(
  <>
    {/* <Wrap>
      <HeaderComponent />
      <Jumbotron />
      <Skill />
      <Project />
      <Footer />
    </Wrap> */}
    {/* <MyComponent /> */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </>
);
