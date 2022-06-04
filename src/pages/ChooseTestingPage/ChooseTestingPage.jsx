import { Link } from "react-router-dom";
import Icons from "../../images/symbol-defs.svg";
import s from "./ChooseTestingPage.module.scss";

const ChooseTestingPage = () => {
  return (
    <section className={s.test}>
      <p className={s.test__description}>
        “Regression testing. What is it?
        <br />
        If the system compiles, that's good, if it boots, that's great!”
      </p>
      <span className={s.test__line}></span>
      <p className={s.test__author}>Linus Torvalds</p>
      <p className={s.test__authorDescription}>
        Linux kernel creator, hacker, 1969
      </p>
      <div className={s.btn__wrapper}>
        <Link className={s.btn__QA} to={"/test/qa"}>
          <span className={s.btn__QaDescription}>QA technical training</span>

          <svg className={s.btn__icon} width="24px" height="16px">
            <use xlinkHref={`${Icons}#icon-right-white`} />
          </svg>
        </Link>
        <Link className={s.btn__test} to={"/test/theory"}>
          <span className={s.btn__testDescription}>Testing theory</span>
          <svg className={s.btn__icon} width="24px" height="16px">
            <use xlinkHref={`${Icons}#icon-right-white`} />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default ChooseTestingPage;
