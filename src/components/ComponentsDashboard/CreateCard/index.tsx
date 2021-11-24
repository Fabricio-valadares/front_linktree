import style from "./style.module.scss";
import { api } from "../../../services/api";
import { useState } from "react";
import { useContext } from "react";
import { DataListSectionContext } from "../../../Providers/dataListSection";
import { requestApiListSessao } from "../../../pages/dashboard";

const CreateCard = ({ close, idSessao }) => {
  const [textInput, setTextInput] = useState<string>("");
  const { setSessao } = useContext(DataListSectionContext);

  const createLayoutCard = async () => {
    const dataFinal = { title: textInput };
    api
      .post(`/card/create/${idSessao}`, dataFinal, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc2NzkzOTksImV4cCI6MTYzNzg1MjE5OSwic3ViIjoiY2MxOGY0NzktMWRlYi00NTI2LTk4MDItYzJmNzczOWM1NzJkIn0.RIqfXbKZFrf8pkbXDJww5VEowRoqqgdYqPJTRcPzNvc`,
        },
      })
      .then((response) => {
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
          placeholder="Titulo do card"
        ></input>
        <button
          onClick={() => {
            close(), createLayoutCard();
          }}
        >
          Criar
        </button>
      </div>
    </section>
  );
};

export { CreateCard };
