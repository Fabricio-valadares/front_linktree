import style from "./style.module.scss";
import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { destroyCookie, parseCookies } from "nookies";

const Header = () => {
  const { authTokenNext: token } = parseCookies();
  const [isTokenAuth, setIsTokenAuth] = useState("");

  useEffect(() => {
    const { urlpiece } = jwt_decode<{ urlpiece: string }>(token);
    setIsTokenAuth(urlpiece);
  });

  const route = useRouter();

  const logoutApp = () => {
    destroyCookie(null, "authTokenNext");

    route.push("/login");
  };

  return (
    <header className={style.header}>
      <div className={style.myLink}>
        <a
          className={style.linkA}
          href={`http://localhost:3000/${isTokenAuth}`}
          rel="noreferrer"
          target="_blank"
        >
          Meu Link: {`http://localhost:3000/${isTokenAuth}`}
        </a>
      </div>
      <div className={style.myLinkMobile}>
        <a
          className={style.linkA}
          href={`http://localhost:3000/${isTokenAuth}`}
          rel="noreferrer"
          target="_blank"
        >
          Ver book
        </a>
      </div>
      <nav>
        <ul className={style.menu}>
          <li>Perfil</li>
          <li>
            <button className={style.buttonLogout} onClick={logoutApp}>
              Sair
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
