import style from "./style.module.scss";
// import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { LinkPreview } from "../previewCard";

const Link = ({ link }) => {
  return (
    <section className={style.conteiner}>
      <ul>
        <li>
          <LinkPreview url={link} />
        </li>
      </ul>
    </section>
  );
};

export { Link };
