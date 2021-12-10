import style from "./style.module.scss";

const Card = ({ title, itensLink }) => {
  return (
    <section>
      <div className={style.divCard}>
        <div>
          <h2 className={style.title}>{title}</h2>
        </div>
        {itensLink.map((element) => (
          <a className={style.divLink} href={element.link} target="_blank">
            {element.title}
          </a>
        ))}
      </div>
    </section>
  );
};

export { Card };
