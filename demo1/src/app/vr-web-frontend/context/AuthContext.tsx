import {createContext, ReactNode, useState} from "react";
import {loadAuthState, storeAuthState} from "./Storage";

interface AuthContextType {
    id: number;
    onLoginSuccess?: (data: any) => void;
    onLogoutSuccess?: () => void;
}

export const AuthContext = createContext<AuthContextType>({ id: 0 });

interface AuthenticationContextProps {
    children: ReactNode;
}

export function AuthenticationContext({ children }: AuthenticationContextProps) {
    const [auth, setAuth] = useState(loadAuthState);

    const onLoginSuccess = (data: any) => {
        setAuth(data);
        storeAuthState(data);
    };

    const onLogoutSuccess = () => {
      setAuth({id:0});
      storeAuthState({id:0})
    }

    return (
        <AuthContext.Provider
            value={{
                ...auth,
                onLoginSuccess,
                onLogoutSuccess
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

