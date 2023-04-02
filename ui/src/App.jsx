import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.component";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default App;
