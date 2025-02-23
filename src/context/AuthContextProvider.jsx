import React, { createContext ,useContext} from 'react';


const userContext=createContext();

const useUserContext=()=>{
    return useContext(userContext);
}

const AuthContextProvider = () => {
    return (
        <div>
            I am context provider.
        </div>
    );
};

export {useUserContext}

export default AuthContextProvider;