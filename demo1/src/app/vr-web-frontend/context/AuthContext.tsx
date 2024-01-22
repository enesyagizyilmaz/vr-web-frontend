import {createContext, ReactNode, useState} from "react";
import {loadAuthState, storeAuthState} from "./Storage";

interface AuthContextType {
    id: number;
    email: string | undefined;
    username: string | undefined;
    onLoginSuccess?: (data: any) => void;
    onLogoutSuccess?: () => void;
}

export const AuthContext = createContext<AuthContextType>({ id: 0,email: undefined, username: undefined});

interface AuthenticationContextProps {
    children: ReactNode;
}

export function AuthenticationContext({ children }: AuthenticationContextProps) {
    const [auth, setAuth] = useState(loadAuthState);

    const onLoginSuccess = (data: any) =>
    {
        setAuth({ ...data, email: data.email, username: data.username});
        storeAuthState({ ...data, email: data.email, username: data.username});
    };

    const onLogoutSuccess = () =>
    {
        setAuth({ id: 0, email: undefined });
        storeAuthState({ id: 0, email: undefined });
    };

    return (
        <AuthContext.Provider
            value={{
                ...auth,
                onLoginSuccess,
                onLogoutSuccess,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

