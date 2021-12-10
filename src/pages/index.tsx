import style from "./style.module.scss";
import Head from "next/head";
import { Header } from "../components/ComponentsHome/header";

const Home = () => {
  return (
    <main className={style.main}>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
    </main>
  );
};

export default Home;
