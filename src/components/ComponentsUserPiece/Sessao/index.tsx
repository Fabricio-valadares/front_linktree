import style from "./style.module.scss";
import { Card } from "../Card";
import SimpleAccordion from "../Accordion";

const Sessao = ({ card, title }) => {
  return (
    <section className={style.conteiner}>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {card.map((element) => (
          <SimpleAccordion key={element.id} title={element.title}>
            <Card itensLink={element.itensLink} />
          </SimpleAccordion>
        ))}
      </div>
    </section>
  );
};

export { Sessao };
