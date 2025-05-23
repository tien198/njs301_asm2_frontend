import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Root from "./pages/Root";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Search from "./pages/search";
import Transactions from "./pages/transactions";

import authenRouter from './routes/authenRouter'

import { getUserInfor } from "./utilities/localStorageUtils/authenToken";
import { ClientAppURI } from './utilities/enums/clientAppUri'
import { setAuthen } from './store/slices/authenSlice'


const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      {
        index: true, element: <Home />,
        loader: () => import('./pages/home').then(i => i.loader())
      },
      {
        path: ClientAppURI.search, element: <Search />,
        action: args => import('./pages/search').then(i => i.search(args))
      },
      {
        path: ClientAppURI.detail + "/:hotelId", element: <Detail />,
        loader: args => import('./pages/detail').then(i => i.loader(args)),
      },
      {
        path: ClientAppURI.transaction, element: <Transactions />,
        loader: () => import('./pages/transactions').then(i => i.loader())
      }
    ]
  },
  authenRouter
])

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const jwtUserInfor = getUserInfor()
    if (!jwtUserInfor)
      return
    
    const userInfor = JSON.parse(jwtUserInfor)
    dispatch(setAuthen(userInfor))
  })
  return <RouterProvider router={router} />
}

export default App;
