
import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Home from "./component/Home";
import MenuRestaruant from "./component/MenuRestaruant";
import Error from "./component/Error";
import UseClass from "./component/UseClass";


const App=()=>{
    return(
        <div className="app">
         <Header/>
         <Outlet/>
        </div>
    )
}

const About=lazy(()=>{
   return import("./component/About")
})

const bRouter=createBrowserRouter([
      {   
       path:"/",
       element:<App/>,
       errorElement:<Error/>,

        
       children:[
        {
            path:"/",
            element:<Body/>,
            
            
        },
        {
              
        path:"/home",
        element:<Home/>,
       


    
        },
        {
         path:"/menu/:resId",
         element:<MenuRestaruant/>
        },
        {
          path:"/contact",
          element:<UseClass/>
        }
         ,
         {
            path:"/about",
            element: <Suspense fallback={<div>Loading...</div>}><About/></Suspense>
         }

       ]
      }
  
])


const my=createRoot(document.querySelector(".parent"));

my.render(<RouterProvider router={bRouter} />);