import { Card } from "../Card";
import style from "./style.module.scss";
import Modal from "../Modal";
import { CreateCard } from "../CreateCard";
import { DeleteSessao } from "../DeleteSessao";
import { UpdateSessao } from "../UpdateSessao";
import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const Sessao = ({ title, card, idSessao }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [idSessaoState, setIdSessaoState] = useState<string>("");

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

  const handleOpenModalUpdate = () => {
    setOpenModalUpdate(true);
  };

  const handleCloseModalUpdate = () => {
    setOpenModalUpdate(false);
  };

  return (
    <>
      <Modal open={openModal} handleClose={handleCloseModal}>
        <CreateCard close={handleCloseModal} idSessao={idSessaoState} />
      </Modal>
      <Modal open={openModalDelete} handleClose={handleCloseModalDelete}>
        <DeleteSessao close={handleCloseModalDelete} idSessao={idSessaoState} />
      </Modal>
      <Modal open={openModalUpdate} handleClose={handleCloseModalUpdate}>
        <UpdateSessao close={handleCloseModalUpdate} idSessao={idSessaoState} />
      </Modal>
      <section className={style.conteiner}>
        <div className={style.divTitle}>
          <h2 className={style.title}>{title}</h2>
          <div>
            <button
              className={style.button}
              onClick={() => {
                handleOpenModalUpdate(), setIdSessaoState(idSessao);
              }}
            >
              <FiEdit size={22} color="#b6b3b3" />
            </button>
            <button
              className={style.button}
              onClick={() => {
                handleOpenModalDelete(), setIdSessaoState(idSessao);
              }}
            >
              <FiTrash2 size={22} color="#a9b4aa" />
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
            className={style.buttonCreateCard}
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
