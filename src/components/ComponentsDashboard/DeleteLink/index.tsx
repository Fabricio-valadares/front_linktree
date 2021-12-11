import style from "./style.module.scss";
import { api } from "../../../services/api";
import { requestApiListSessao } from "../../../pages/dashboard";
import { useContext, useState } from "react";
import { DataListSectionContext } from "../../../Providers/dataListSection";
import { parseCookies } from "nookies";

const DeleteLink = ({ close, idLink }) => {
  const { setSessao } = useContext(DataListSectionContext);
  const { authTokenNext: token } = parseCookies();

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
          className={style.button}
          onClick={() => {
            close();
          }}
        >
          Cancelar
        </button>
        <button
          className={style.button}
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
