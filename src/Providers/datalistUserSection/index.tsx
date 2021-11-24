import { ReactNode, useState, createContext } from "react";

interface IChildrenContext {
  children: ReactNode;
}

interface ITypeState {
  sessaoUser: any;
  setSessaoUser: React.Dispatch<React.SetStateAction<any>>;
}

export const DataListSectionUserContext = createContext<ITypeState>(
  {} as ITypeState
);

const DataListSectionUserProvider = ({ children }: IChildrenContext) => {
  const [sessaoUser, setSessaoUser] = useState([]);

  return (
    <DataListSectionUserContext.Provider value={{ sessaoUser, setSessaoUser }}>
      {children}
    </DataListSectionUserContext.Provider>
  );
};

export { DataListSectionUserProvider };
