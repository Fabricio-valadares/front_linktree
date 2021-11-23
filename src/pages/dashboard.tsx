import Head from "next/head";
import { Dashboard } from "../components/Dashboard";
import { api } from "../services/api";
import { useContext, useEffect } from "react";
import { DataListSectionContext } from "../Providers/dataListSection";

export const requestApiListSessao = (setSessao: any) => {
  api
    .get("/section/listsectionuser", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc2NzkzOTksImV4cCI6MTYzNzg1MjE5OSwic3ViIjoiY2MxOGY0NzktMWRlYi00NTI2LTk4MDItYzJmNzczOWM1NzJkIn0.RIqfXbKZFrf8pkbXDJww5VEowRoqqgdYqPJTRcPzNvc`,
      },
    })
    .then((response) => {
      setSessao(response.data);
    })
    .catch((err) => console.log(err));
};

const DashboardPage = () => {
  const { setSessao } = useContext(DataListSectionContext);

  useEffect(() => {
    requestApiListSessao(setSessao);
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
