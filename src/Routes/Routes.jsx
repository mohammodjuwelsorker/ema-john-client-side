
import {createBrowserRouter,} from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../layouts/Main/Pages/Home/Home";
import ErrPage from "../layouts/Main/Pages/ErrPage/ErrPage";
import Shop from "../layouts/Main/Pages/Shop/Shop";
import Order from "../layouts/Main/Pages/Order/Order";
import OrderReview from "../layouts/Main/Pages/OrderReview/OrderReview";
import Manage from "../layouts/Main/Pages/Manage/Manage";
import Login from "../layouts/Main/Pages/Login/Login";
const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrPage></ErrPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/shop',
            element: <Shop></Shop>
         },
         {
            path: '/order',
            element: <Order></Order>
         },
         {
            path: '/orderReview',
            element: <OrderReview></OrderReview>
         },
         {
            path: '/manage',
            element: <Manage></Manage>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
      ]
   }
])

export default router