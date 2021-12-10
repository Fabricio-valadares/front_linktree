import style from "./style.module.scss";
import { Card } from "../Card";

const Sessao = ({ card, title }) => {
  return (
    <section className={style.conteiner}>
      <div>
        <h1 className={style.titleSessao}>{title}</h1>
      </div>
      <div className={style.divCard}>
        {card.map((element) => (
          <Card
            key={element.id}
            title={element.title}
            itensLink={element.itensLink}
          />
        ))}
      </div>
    </section>
  );
};

export { Sessao };
