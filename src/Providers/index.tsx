import { ReactNode } from "react";
import { DataListSectionProvider } from "./dataListSection";
import { DataListSectionUserProvider } from "./datalistUserSection";

interface IChildrenContext {
  children: ReactNode;
}

const Providers = ({ children }: IChildrenContext) => {
  return (
    <DataListSectionProvider>
      <DataListSectionUserProvider>{children}</DataListSectionUserProvider>
    </DataListSectionProvider>
  );
};

export { Providers };
