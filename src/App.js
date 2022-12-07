import React from "react";
import useAuth from "./hooks/useAuth";
import EditUserPage from "./pages/UserPage/EditUserPage";
import ProtectedRoute from "./helpers/ProtectedRoutes";
import IsUserLogIn from "./helpers/IsUserLogIn";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import * as ROUTE from "./Constant/routes";
import UserContext from "./context/user";
import Layout from "./layout/Layout.jsx";
import { CircularProgress } from "@mui/material";

const ForgotPassword = React.lazy(() => import("./pages/Auth/ForgotPassword"));
const UserPage = React.lazy(() => import("./pages/UserPage/UserPage"));
const HomePage = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Auth/Login.jsx"));
const SignUp = React.lazy(() => import("./pages/Auth/SignUp.jsx"));

function App() {
    const { user } = useAuth();

    return (
        <UserContext.Provider value={{ user }}>
            <BrowserRouter>
                <React.Suspense
                    fallback={
                        <div className="flex items-center justify-center h-screen">
                            <CircularProgress
                                className="mr-2 height=[10%]
                                    width=[10%]"
                            />
                        </div>
                    }>
                    <Routes>
                        <Route
                            path={ROUTE.HOME}
                            element={
                                <ProtectedRoute user={user}>
                                    <Layout />
                                </ProtectedRoute>
                            }>
                            <Route index element={<HomePage />} />
                            <Route
                                path={ROUTE.PROFILE}
                                element={<UserPage />}
                            />
                            <Route
                                path={ROUTE.EDIT_PROFILE}
                                element={<EditUserPage />}
                            />
                        </Route>
                        <Route
                            path={ROUTE.LOGIN}
                            element={
                                <IsUserLogIn user={user}>
                                    <Login />
                                </IsUserLogIn>
                            }
                        />
                        <Route
                            path={ROUTE.FORGOTPASSWORD}
                            element={
                                <IsUserLogIn user={user}>
                                    <ForgotPassword />
                                </IsUserLogIn>
                            }
                        />
                        <Route
                            path={ROUTE.SIGN_UP}
                            element={
                                <IsUserLogIn>
                                    <SignUp />
                                </IsUserLogIn>
                            }
                        />
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
