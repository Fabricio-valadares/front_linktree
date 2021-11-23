import { Sessao } from "../Sessao";
import style from "./style.module.scss";
import { useContext, useState } from "react";
import { DataListSectionContext } from "../../Providers/dataListSection";
import Modal from "../../components/Modal";
import { CreateSessao } from "../CreateSessao";

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
      <section className={style.conteiner}>
        <div className={style.conteinerCreateUser}>
          <div className={style.createSessao}>
            <button onClick={handleOpenModal}>Criar Sessão</button>
          </div>
          {sessao.map((element) => (
            <Sessao
              key={element.id}
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
