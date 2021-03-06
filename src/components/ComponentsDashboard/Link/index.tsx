import style from "./style.module.scss";
import { useState } from "react";
import Modal from "../Modal";
import { DeleteLink } from "../DeleteLink";
import { UpdateLink } from "../UpdateLink";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

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
        <div className={style.divTitleLink}>
          <p key={dataLink.id} className={style.textTitle}>
            {dataLink.title}
          </p>
          <p key={dataLink.id} className={style.textLink}>
            {dataLink.link}
          </p>
        </div>

        <div>
          <button
            className={style.button}
            onClick={() => {
              handleOpenModalUpdate(), setIdLinkState(idLink);
            }}
          >
            <FiEdit3 className={style.icons} size={18} color="#555252" />
          </button>
          <button
            className={style.button}
            onClick={() => {
              handleOpenModalDelete(), setIdLinkState(idLink);
            }}
          >
            <FiTrash2 size={18} color="#555252" />
          </button>
        </div>
      </div>
    </>
  );
};

export { Link };
