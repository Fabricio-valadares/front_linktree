import style from "./style.module.scss";
import { useRouter } from "next/router";

const BodyContent = () => {
  const route = useRouter();

  return (
    <section className={style.sectionContent}>
      <div className={style.textDiv}>
        <h1 className={style.title}>Compartilhe o seu melhor todos os dias </h1>
        <p className={style.subTitle}>
          Visitamos muitos sites, vemos muitas coisas legais que nós representa,
          então porque não compartilhar !
        </p>
        <div className={style.divButton}>
          <button
            className={style.buttonP}
            onClick={() => route.push("/register")}
          >
            Fazer parte !
          </button>
        </div>
      </div>
      <div className={style.divImg}>
        {/* <img className={style.imgDiv} src={"./assets/imgs/img_home.svg"} /> */}
      </div>
    </section>
  );
};

export { BodyContent };
