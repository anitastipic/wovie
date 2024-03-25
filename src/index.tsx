import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout.js";
import ErrorPage from "./pages/ErrorPage.js";
import Home from "./pages/Home.js";
import MapPage from "./pages/MapPage.tsx";
import UserSignUp from "./components/UserSignUp.tsx";
import UserLogin from "./components/UserLogin.tsx";
import UserPage from "./pages/UserPage.tsx";
import { AuthProvider } from "./context/AuthenticationContext.tsx";
import InProgress from "./pages/InProgress.tsx";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <AuthProvider>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout/>} errorElement={<ErrorPage/>}>
                        <Route index element={<Home/>} />
                        <Route path="map" element={<MapPage/>} />
                        <Route path="login" element={<UserLogin/>} />
                        <Route path="register" element={<UserSignUp/>} />
                        <Route path="hero" element={<UserPage/>} />
                        <Route path="recycling-1-0-1" element={<InProgress/>} />
                    </Route>
                </Routes>
            </HashRouter>
        </AuthProvider>
    </React.StrictMode>
);
