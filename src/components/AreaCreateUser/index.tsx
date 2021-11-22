import { Sessao } from "../Sessao";
import style from "./style.module.scss";

const AreaCreateUser = () => {
  return (
    <section className={style.conteiner}>
      <div className={style.conteinerCreateUser}>
        <div className={style.createSessao}>
          <button>Criar Sessão</button>
        </div>
        <Sessao />
      </div>
    </section>
  );
};

export { AreaCreateUser };
