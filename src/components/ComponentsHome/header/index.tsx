import style from "./style.module.scss";
import { useRouter } from "next/router";
import { BodyContent } from "../bodyContent";

const Header = () => {
  const route = useRouter();
  return (
    <main className={style.main}>
      <header className={style.header}>
        <div className={style.divLogo}>
          <img
            className={style.imgLogo}
            src="./assets/imgs/logo.png"
            alt="logo"
          />
        </div>
        <nav className={style.navMenu}>
          <ul className={style.menu}>
            <li className={style.itemMenu}>
              <button
                className={style.buttonOne}
                onClick={() => route.push("/login")}
              >
                Login
              </button>
            </li>
            <li>
              <button
                className={style.buttonTwo}
                onClick={() => route.push("/register")}
              >
                Cadastro
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <BodyContent />
    </main>
  );
};

export { Header };
