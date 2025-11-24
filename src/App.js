import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaruntMenu from "./components/RestaruntMenu";
import UserContext from "./utils/userContext";
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = React.useState();

  useEffect(() => {
    const data = {
      name: "Abhishek",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaruntMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading!...</h1>}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
