import style from "./style.module.scss";
import { api } from "../../../services/api";
import { requestApiListSessao } from "../../../pages/dashboard";
import { useContext, useState } from "react";
import { DataListSectionContext } from "../../../Providers/dataListSection";

const UpdateSessao = ({ close, idSessao }) => {
  const { setSessao } = useContext(DataListSectionContext);
  const [textInput, setTextInput] = useState<string>("");

  const updateLayoutSessao = async () => {
    const dataFinal = { title: textInput };

    api
      .put(`/section/update/${idSessao}`, dataFinal, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc2NzkzOTksImV4cCI6MTYzNzg1MjE5OSwic3ViIjoiY2MxOGY0NzktMWRlYi00NTI2LTk4MDItYzJmNzczOWM1NzJkIn0.RIqfXbKZFrf8pkbXDJww5VEowRoqqgdYqPJTRcPzNvc`,
        },
      })
      .then((response) => {
        close();
        requestApiListSessao(setSessao);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className={style.conteiner}>
      <div className={style.divInputButton}>
        <input
          onChange={(event) => setTextInput(event.target.value)}
          type="text"
          placeholder="Novo titulo sessão"
        ></input>
        <button
          onClick={() => {
            close(), updateLayoutSessao();
          }}
        >
          Atualizar
        </button>
      </div>
    </section>
  );
};

export { UpdateSessao };
