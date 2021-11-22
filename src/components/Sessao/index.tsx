import { Card } from "../Card";
import style from "./style.module.scss";

const Sessao = () => {
  return (
    <section className={style.conteiner}>
      <div>
        <h2>Musicas</h2>
      </div>
      <Card />
      <div className={style.divCard}>
        <button>Criar Card</button>
      </div>
    </section>
  );
};

export { Sessao };
