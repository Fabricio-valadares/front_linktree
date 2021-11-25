import { Sessao } from "../../ComponentsDashboard/Sessao";
import style from "./style.module.scss";
import { useContext, useState } from "react";
import { DataListSectionContext } from "../../../Providers/dataListSection";
import Modal from "../../ComponentsDashboard/Modal";
import { CreateSessao } from "../../ComponentsDashboard/CreateSessao";
import jwt_decode from "jwt-decode";

const AreaCreateUser = () => {
  const { sessao } = useContext(DataListSectionContext);

  const [openModal, setOpenModal] = useState(false);
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token") || "";

    return JSON.parse(token);
  });
  const { urlpiece }: any = jwt_decode(token);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Modal open={openModal} handleClose={handleCloseModal}>
        <CreateSessao close={handleCloseModal} />
      </Modal>
      <section className={style.conteinerPreview}>
        <div className={style.divIframe}>
          <iframe
            height="100%"
            width="100%"
            src={`http://localhost:3000/${urlpiece}`}
          ></iframe>
        </div>
      </section>
      <section className={style.conteiner}>
        <div className={style.conteinerCreateUser}>
          <div className={style.createSessao}>
            <button
              className={style.buttonCreateSessao}
              onClick={handleOpenModal}
            >
              Criar Sessão
            </button>
          </div>
          {sessao.map((element) => (
            <Sessao
              key={element.id}
              idSessao={element.id}
              title={element.title}
              card={element.card}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export { AreaCreateUser };
