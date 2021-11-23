import style from "./style.module.scss";

const Link = ({ dataLink }) => {
  return (
    <p className={style.link} key={dataLink.id}>
      {dataLink.link}
    </p>
  );
};

export { Link };
