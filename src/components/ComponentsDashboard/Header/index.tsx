import style from "./style.module.scss";
import jwt_decode from "jwt-decode";
import { useState } from "react";

const Header = () => {
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token") || "";

    return JSON.parse(token);
  });
  const { urlpiece }: any = jwt_decode(token);

  return (
    <header className={style.header}>
      <div className={style.myLink}>
        <a href={`http://localhost:3000/${urlpiece}`} target="_blank">
          Meu Link: {`http://localhost:3000/${urlpiece}`}
        </a>
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
