import style from "./style.module.scss";

const Link = ({ dataLink }) => {
  return (
    <div className={style.divLink}>
      <p key={dataLink.id}>{dataLink.link}</p>
      <div>
        <button>Atualizar</button>
        <button>Excluir</button>
      </div>
    </div>
  );
};

export { Link };
