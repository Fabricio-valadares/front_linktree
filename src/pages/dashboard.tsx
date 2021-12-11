import Head from "next/head";
import { Dashboard } from "../components/ComponentsDashboard/Dashboard";
import { api } from "../services/api";
import { useContext, useEffect, useState } from "react";
import { DataListSectionContext } from "../Providers/dataListSection";
import { parseCookies } from "nookies";

export const requestApiListSessao = (setSessao, token) => {
  api
    .get("/section/listsectionuser", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      setSessao(response.data);
    })
    .catch((err) => console.log(err));
};

const DashboardPage = (props) => {
  const { setSessao } = useContext(DataListSectionContext);
  const { authTokenNext: token } = parseCookies();

  useEffect(() => {
    requestApiListSessao(setSessao, token);
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

export const getServerSideProps = async (ctx) => {
  const { ["authTokenNext"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { token: token },
  };
};

export default DashboardPage;
