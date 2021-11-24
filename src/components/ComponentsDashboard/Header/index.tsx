import style from "./style.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.myLink}>
        <p>Meu Link: https://favaco/fabriciovaladares</p>
      </div>
      <nav>
        <ul>
          <li>Perfil</li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
