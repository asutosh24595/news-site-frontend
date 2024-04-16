import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Otpverify from "./components/Otpverify";
import Premium from "./components/Premium";

function App() {
  const router = createBrowserRouter([
    { index: true, element: <Home /> },
    { path: "/:query", element: <Home /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/otp-verify", element: <Otpverify /> },
    { path: "/premium", element: <Premium /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
