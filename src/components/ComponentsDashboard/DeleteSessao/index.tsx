import style from "./style.module.scss";
import { api } from "../../../services/api";
import { requestApiListSessao } from "../../../pages/dashboard";
import { useContext } from "react";
import { DataListSectionContext } from "../../../Providers/dataListSection";

const DeleteSessao = ({ close, idSessao }) => {
  const { setSessao } = useContext(DataListSectionContext);

  const deleteLayoutSessao = async () => {
    api
      .delete(`/section/deletesessao/${idSessao}`, {
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
        <button
          onClick={() => {
            close();
          }}
        >
          Cancelar
        </button>
        <button
          onClick={() => {
            close(), deleteLayoutSessao();
          }}
        >
          Confirmar
        </button>
      </div>
    </section>
  );
};

export { DeleteSessao };
