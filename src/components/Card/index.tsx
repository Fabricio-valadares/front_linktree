import style from "./style.module.scss";

const Card = ({ title, itensLink }) => {
  return (
    <>
      <div className={style.cardArea}>
        <div className={style.title}>
          <h2>{title}</h2>
        </div>
        <div className={style.divLink}>
          {itensLink.map((element: { id: string; link: string }) => (
            <p className={style.link} key={element.id}>
              {element.link}
            </p>
          ))}
        </div>
        <div className={style.divCard}>
          <button>Criar Link</button>
        </div>
      </div>
    </>
  );
};

export { Card };
