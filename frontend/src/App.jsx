import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Mails from "./components/Mails";
import Body from "./components/Body";
import Mail from "./components/Mail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SendEmail from "./components/SendEmail";
import Signup from "./components/Signup";
import Login from "./components/Login";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Mails />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  }
]);

const App = () => {
  return (
    <div className="bg-[#F6F8FC] h-screen">
      <Navbar />
      <RouterProvider router={appRouter} />
      <div
        className="absolute w-[30%] bottom-0
      right-10 z-10"
      >
        <SendEmail />
      </div>
    </div>
  );
};

export default App;
