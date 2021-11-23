import { Sessao } from "../Sessao";
import style from "./style.module.scss";
import { useContext } from "react";
import { DataListSectionContext } from "../../Providers/dataListSection";

const AreaCreateUser = () => {
  const { sessao } = useContext(DataListSectionContext);

  return (
    <section className={style.conteiner}>
      <div className={style.conteinerCreateUser}>
        <div className={style.createSessao}>
          <button>Criar Sessão</button>
        </div>
        {sessao.map((element) => (
          <Sessao key={element.id} title={element.title} card={element.card} />
        ))}
      </div>
    </section>
  );
};

export { AreaCreateUser };
