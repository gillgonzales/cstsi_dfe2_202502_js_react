import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router";
import GuestLayout from "../layouts/Guest";
import Home from "../pages/Home/index";
import Show from "../pages/Show/Show";
import NotFound from "../pages/NotFound/NotFound";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<GuestLayout />}>
                <Route index element={<Home />} />
                <Route path="/produto/:id" element={<Show />} />
                <Route path="*" element={<NotFound />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
