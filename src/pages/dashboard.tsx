import Head from "next/head";
import { Dashboard } from "../components/ComponentsDashboard/Dashboard";
import { api } from "../services/api";
import { useContext, useEffect, useState } from "react";
import { DataListSectionContext } from "../Providers/dataListSection";
import { useRouter } from "next/router";

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
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token") || "";

    return JSON.parse(token);
  });

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

// const authPage = (ComponetPage) => (props) => {
//   if (typeof window !== "undefined") {
//     const route = useRouter();

//     const token = localStorage.getItem("token");

//     if (!token) {
//       route.push("/login");
//     } else {
//       return <ComponetPage {...props} />;
//     }
//   }

//   return null;
// };

export default DashboardPage;
