import { ReactNode, useState, createContext } from "react";

interface IChildrenContext {
  children: ReactNode;
}

interface ITypeState {
  sessao: any;
  setSessao: React.Dispatch<React.SetStateAction<any>>;
}

export const DataListSectionContext = createContext<ITypeState>(
  {} as ITypeState
);

const DataListSectionProvider = ({ children }: IChildrenContext) => {
  const [sessao, setSessao] = useState([]);

  return (
    <DataListSectionContext.Provider value={{ sessao, setSessao }}>
      {children}
    </DataListSectionContext.Provider>
  );
};

export { DataListSectionProvider };
