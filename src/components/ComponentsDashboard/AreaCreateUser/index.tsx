import { Sessao } from "../../ComponentsDashboard/Sessao";
import style from "./style.module.scss";
import { useContext, useState } from "react";
import { DataListSectionContext } from "../../../Providers/dataListSection";
import Modal from "../../ComponentsDashboard/Modal";
import { CreateSessao } from "../../ComponentsDashboard/CreateSessao";

const AreaCreateUser = () => {
  const { sessao } = useContext(DataListSectionContext);
  const [openModal, setOpenModal] = useState(false);

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
            src="http://localhost:3000/favaco"
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
