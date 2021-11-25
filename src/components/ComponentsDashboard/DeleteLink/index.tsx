import style from "./style.module.scss";
import { api } from "../../../services/api";
import { requestApiListSessao } from "../../../pages/dashboard";
import { useContext, useState } from "react";
import { DataListSectionContext } from "../../../Providers/dataListSection";

const DeleteLink = ({ close, idLink }) => {
  const { setSessao } = useContext(DataListSectionContext);
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token") || "";

    return JSON.parse(token);
  });

  const deleteLayoutLink = async () => {
    api
      .delete(`/itens/deletelink/${idLink}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        close();
        requestApiListSessao(setSessao, token);
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
            close(), deleteLayoutLink();
          }}
        >
          Confirmar
        </button>
      </div>
    </section>
  );
};

export { DeleteLink };