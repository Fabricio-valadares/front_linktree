import style from "./style.module.scss";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={style.title}>Titulo</h1>
    </>
  );
};

export default Home;
