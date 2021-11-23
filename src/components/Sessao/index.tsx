import { Card } from "../Card";
import style from "./style.module.scss";
import Modal from "../Modal";
import { CreateCard } from "../CreateCard";
import { useState } from "react";

const Sessao = ({ title, card, idSessao }) => {
  const [openModal, setOpenModal] = useState(false);
  const [idSessaoState, setIdSessaoState] = useState<string>("");

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Modal open={openModal} handleClose={handleCloseModal}>
        <CreateCard close={handleCloseModal} idSessao={idSessaoState} />
      </Modal>
      <section className={style.conteiner}>
        <div className={style.divTitle}>
          <h2>{title}</h2>
        </div>
        {card.map((element) => (
          <Card
            key={element.id}
            title={element.title}
            idCard={element.id}
            itensLink={element.itensLink}
          />
        ))}
        <div className={style.divCard}>
          <button
            onClick={() => {
              handleOpenModal(), setIdSessaoState(idSessao);
            }}
          >
            Criar Card
          </button>
        </div>
      </section>
    </>
  );
};

export { Sessao };
