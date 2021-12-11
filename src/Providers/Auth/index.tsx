import { ReactNode, useState, createContext } from "react";

interface IChildrenContext {
  children: ReactNode;
}

interface ITypeState {
  IsAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<ITypeState>({} as ITypeState);

const AuthProvider = ({ children }: IChildrenContext) => {
  const [IsAuth, setIsAuth] = useState(false);

  const signAth = () => {};

  return (
    <AuthContext.Provider value={{ IsAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
