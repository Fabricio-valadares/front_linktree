import style from "./style.module.scss";

const Card = () => {
  return (
    <div className={style.cardArea}>
      <div>
        <h2>Rock</h2>
      </div>
      <div className={style.divLink}>
        <p>https://youtu.be/9rb11MRN4Kw</p>
      </div>
      <div className={style.divCard}>
        <button>Criar Card</button>
      </div>
    </div>
  );
};

export { Card };
