import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login, SignUp } from "./conponents/index.js";

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>, 
    children : [
      //  { 
      //     path: '/',
      //     element:"<Home/>"
      //  }.

      { 
         path: "/login",
         element: <Login/>
      },
      {
         path : "/sign-up",
         element : <SignUp/>
      }
      

    ]
  }
])


render(
  <Provider store={store}>
   <RouterProvider router={router}  />
  </Provider>,
  document.getElementById("app")
);
