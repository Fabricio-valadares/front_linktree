import style from "./style.module.scss";
import { useState } from "react";
import Modal from "../Modal";
import { DeleteLink } from "../DeleteLink";
import { UpdateLink } from "../UpdateLink";

const Link = ({ dataLink, idLink }) => {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [idLinkState, setIdLinkState] = useState<string>("");

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
      <Modal open={openModalDelete} handleClose={handleCloseModalDelete}>
        <DeleteLink close={handleCloseModalDelete} idLink={idLinkState} />
      </Modal>
      <Modal open={openModalUpdate} handleClose={handleCloseModalUpdate}>
        <UpdateLink close={handleCloseModalUpdate} idLink={idLinkState} />
      </Modal>
      <div className={style.divLink}>
        <p key={dataLink.id}>{dataLink.link}</p>
        <div>
          <button
            onClick={() => {
              handleOpenModalUpdate(), setIdLinkState(idLink);
            }}
          >
            Atualizar
          </button>
          <button
            onClick={() => {
              handleOpenModalDelete(), setIdLinkState(idLink);
            }}
          >
            Excluir
          </button>
        </div>
      </div>
    </>
  );
};

export { Link };
