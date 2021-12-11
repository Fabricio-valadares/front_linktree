import { ReactNode, useState, createContext } from "react";
import { api } from "../../services/api";
import { setCookie } from "nookies";
import { useRouter } from "next/router";

interface IChildrenContext {
  children: ReactNode;
}

interface ITypeState {
  isToken: boolean;
  setIsToken: React.Dispatch<React.SetStateAction<boolean>>;
  signAuth: any;
}

export const AuthContext = createContext<ITypeState>({} as ITypeState);

const AuthProvider = ({ children }: IChildrenContext) => {
  const [isToken, setIsToken] = useState(false);
  const route = useRouter();

  function signAuth(dataLogin) {
    api
      .post("/login", dataLogin)
      .then((response) => {
        setCookie(undefined, "authTokenNext", response.data.token, {
          maxAge: 60 * 60 * 1, // 1 hora,
        });

        setIsToken(response.data.token);

        route.push("/dashboard");
      })
      .catch((error) => console.log(error));
  }

  return (
    <AuthContext.Provider value={{ isToken, setIsToken, signAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
