import { Sessao } from "../Sessao";
import style from "./style.module.scss";
import { useContext } from "react";
import { DataListSectionUserContext } from "../../../Providers/datalistUserSection";

const Container = ({ title }) => {
  const { sessaoUser } = useContext(DataListSectionUserContext);

  return (
    <main className={style.conteiner}>
      <div className={style.areaDataUser}>
        <div className={style.divTitleInImgProfile}>
          <div className={style.divImg}>
            <img
              className={style.profile}
              src="https://media-exp1.licdn.com/dms/image/C4D03AQG1IelQDVvnxA/profile-displayphoto-shrink_800_800/0/1611430294846?e=1643241600&v=beta&t=uq5qm2fpzwQItO4LN9tX4h4xNTbdIyYVCuzQAlZrnC8"
            />
          </div>
          <h1>@{title}</h1>
        </div>
        <div className={style.divAreaContent}>
          {sessaoUser.map((element) => (
            <Sessao
              key={element.id}
              card={element.card}
              title={element.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export { Container };
