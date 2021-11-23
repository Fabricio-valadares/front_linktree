import style from "./style.module.scss";
import { useState } from "react";
import Modal from "../Modal";
import { DeleteLink } from "../DeleteLink";

const Link = ({ dataLink, idLink }) => {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [idLinkState, setIdLinkState] = useState<string>("");

  const handleOpenModalDelete = () => {
    setOpenModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setOpenModalDelete(false);
  };

  return (
    <>
      <Modal open={openModalDelete} handleClose={handleCloseModalDelete}>
        <DeleteLink close={handleCloseModalDelete} idLink={idLinkState} />
      </Modal>
      <div className={style.divLink}>
        <p key={dataLink.id}>{dataLink.link}</p>
        <div>
          <button>Atualizar</button>
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
