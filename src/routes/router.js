import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../layout/main/RootLayout";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<LoginPage />} />
        </Route>
    )
);

export default router