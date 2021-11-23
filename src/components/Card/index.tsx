import style from "./style.module.scss";
import { Link } from "../Link";
import { useState } from "react";
import { CreateLink } from "../CreateLink";
import Modal from "../Modal";
import { DeleteCard } from "../DeleteCard";

const Card = ({ title, itensLink, idCard }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [idCardState, setIdCardState] = useState<string>("");

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
        <CreateLink close={handleCloseModal} idCard={idCardState} />
      </Modal>
      <Modal open={openModalDelete} handleClose={handleCloseModalDelete}>
        <DeleteCard close={handleCloseModalDelete} idCard={idCardState} />
      </Modal>
      <div className={style.cardArea}>
        <div className={style.title}>
          <h2>{title}</h2>
        </div>
        <div className={style.divLink}>
          {itensLink.map((element: { id: string; link: string }) => (
            <Link dataLink={element} idLink={element.id} />
          ))}
        </div>
        <div className={style.divCard}>
          <button
            onClick={() => {
              handleOpenModal(), setIdCardState(idCard);
            }}
          >
            Criar Link
          </button>
          <div>
            <button>Atualizar</button>
            <button
              onClick={() => {
                handleOpenModalDelete(), setIdCardState(idCard);
              }}
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
