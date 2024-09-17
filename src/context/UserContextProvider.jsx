import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
    const [user, SetUser] = useState(null)
    return (
        <UserContext.Provider value={{user,SetUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;