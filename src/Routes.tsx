import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/main";
import ViteDefault from "./pages/viteDefault";


export default function Routes() {
    const routeList = createBrowserRouter([
        {
            path: "/",
            element: <MainPage/>
        },
        {
            path: "/vite",
            element: <ViteDefault/>
        }
    ]);

    return (
            <RouterProvider router={routeList} />
    );

}