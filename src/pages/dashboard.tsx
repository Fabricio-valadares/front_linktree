import Head from "next/head";
import { GetServerSideProps } from "next";
import { Dashboard } from "../components/Dashboard";
import { api } from "../services/api";
import { useContext } from "react";
import { DataListSectionContext } from "../Providers/dataListSection";

const DashboardPage = (props: any) => {
  const { setSessao } = useContext(DataListSectionContext);

  setSessao(props.data);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Dashboard />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await api
    .get("/section/listsectionuser", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc2NzkzOTksImV4cCI6MTYzNzg1MjE5OSwic3ViIjoiY2MxOGY0NzktMWRlYi00NTI2LTk4MDItYzJmNzczOWM1NzJkIn0.RIqfXbKZFrf8pkbXDJww5VEowRoqqgdYqPJTRcPzNvc`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));

  return {
    props: { data },
  };
};

export default DashboardPage;
