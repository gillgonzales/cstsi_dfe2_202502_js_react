import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router";
import GuestLayout from "../layouts/Guest";
import Home from "../pages/Home/Home";
import Show from "../pages/Show/Show";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import { SignUp } from "../pages/SignUp/SignUp";
import DashboardLayout from "../layouts/Dashboard";
import Admin from "../pages/Admins/Admin";
import Users from "../pages/Admins/Users";
import Produto from "../pages/Admins/Produtos";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<GuestLayout />}>
                <Route index element={<Home />} />
                <Route path="/produto/:id" element={<Show />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="*" element={<NotFound />}></Route>
            </Route>
            <Route path="/" element={<PrivateRoute />}>
                <Route path="dashboard" element={<DashboardLayout />}>
                    <Route index element={<Admin />} />
                    <Route path="users" element={<Users />} />
                    <Route path="produtos" element={<Produto />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
