import { Card } from "../Card";
import style from "./style.module.scss";
import Modal from "../Modal";
import { CreateCard } from "../CreateCard";
import { DeleteSessao } from "../DeleteSessao";
import { useState } from "react";

const Sessao = ({ title, card, idSessao }) => {
  const [openModal, setOpenModal] = useState(false);
  const [idSessaoState, setIdSessaoState] = useState<string>("");
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModalDelete = () => {
    setOpenModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setOpenModalDelete(false);
  };

  return (
    <>
      <Modal open={openModal} handleClose={handleCloseModal}>
        <CreateCard close={handleCloseModal} idSessao={idSessaoState} />
      </Modal>
      <Modal open={openModalDelete} handleClose={handleCloseModalDelete}>
        <DeleteSessao close={handleCloseModalDelete} idSessao={idSessaoState} />
      </Modal>
      <section className={style.conteiner}>
        <div className={style.divTitle}>
          <h2>{title}</h2>
          <div>
            <button>Atualizar</button>
            <button
              onClick={() => {
                handleOpenModalDelete(), setIdSessaoState(idSessao);
              }}
            >
              Excluir
            </button>
          </div>
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
          <div>
            <button>Atualizar</button>
            <button>Excluir</button>
          </div>
        </div>
      </section>
    </>
  );
};

export { Sessao };
