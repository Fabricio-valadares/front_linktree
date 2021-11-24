import style from "./style.module.scss";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Link = ({ link }) => {
  return (
    <section className={style.conteiner}>
      <ul>
        <li>
          <LinkPreview url={link} width="400px" />
        </li>
      </ul>
    </section>
  );
};

export { Link };
