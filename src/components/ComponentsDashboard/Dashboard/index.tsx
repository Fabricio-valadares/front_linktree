import { Header } from "../Header";
import style from "./style.module.scss";
import { ContentDashboard } from "../ContentDashboard";

const Dashboard = () => {
  return (
    <main className={style.conteiner}>
      <Header />
      <ContentDashboard />
    </main>
  );
};

export { Dashboard };
