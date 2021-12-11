import { ReactNode } from "react";
import { DataListSectionProvider } from "./dataListSection";
import { DataListSectionUserProvider } from "./datalistUserSection";
import { AuthProvider } from "./Auth";

interface IChildrenContext {
  children: ReactNode;
}

const Providers = ({ children }: IChildrenContext) => {
  return (
    <AuthProvider>
      <DataListSectionProvider>
        <DataListSectionUserProvider>{children}</DataListSectionUserProvider>
      </DataListSectionProvider>
    </AuthProvider>
  );
};

export { Providers };
