import { ReactNode } from "react";
import { DataListSectionProvider } from "./dataListSection";

interface IChildrenContext {
  children: ReactNode;
}

const Providers = ({ children }: IChildrenContext) => {
  return <DataListSectionProvider>{children}</DataListSectionProvider>;
};

export { Providers };
