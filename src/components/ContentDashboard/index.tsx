import style from "./style.module.scss";
import { AreaCreateUser } from "../AreaCreateUser";

const ContentDashboard = () => {
  return (
    <main className={style.conteiner}>
      <AreaCreateUser />
    </main>
  );
};

export { ContentDashboard };
