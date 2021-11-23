import { Card } from "../Card";
import style from "./style.module.scss";

const Sessao = ({ title, card }) => {
  return (
    <section className={style.conteiner}>
      <div className={style.divTitle}>
        <h2>{title}</h2>
      </div>
      {card.map((element) => (
        <Card
          key={element.id}
          title={element.title}
          itensLink={element.itensLink}
        />
      ))}
      <div className={style.divCard}>
        <button>Criar Card</button>
      </div>
    </section>
  );
};

export { Sessao };
