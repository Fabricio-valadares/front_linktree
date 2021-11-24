import style from "./style.module.scss";
import { Link } from "../Link";

const Card = ({ itensLink }) => {
  return (
    <section>
      {itensLink.map((element) => (
        <Link link={element.link} />
      ))}
    </section>
  );
};

export { Card };
