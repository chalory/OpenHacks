import { useState, createContext, useContext, useEffect } from "react";

const initialState = {
    books: [],
    setBooks: () => {},
};

const AuthContext = createContext(initialState);

export const AuthContextProvider = props => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")));

    const login = async user => {
        // const res = await axios.post("/api/auth/login", inputs);
        setCurrentUser(user);
    };

    const logout = async () => {
        // await axios.post("/api/auth/logout");
        setCurrentUser({});
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    const contextValue = {
        currentUser,
        login,
        logout,
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
