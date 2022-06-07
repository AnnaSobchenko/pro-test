import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Icons from "../../images/symbol-defs.svg";
import { testingType } from "../../redux/questions/questionsSlice";
import s from "./MainPage.module.scss";

const MainPage = () => {
  const dispatch = useDispatch();

  const getQuestions = (e) => {
    const btnValue = e.target.innerText;

    if (btnValue === "QA technical training") {
      return dispatch(testingType(btnValue));
    }
    if (btnValue === "Testing theory") {
      return dispatch(testingType(btnValue));
    }
  };

  return (
    <section className={s.main}>
      <p className={s.main__description}>
        “Regression testing. What is it?
        <br />
        If the system compiles, that's good, if it boots, that's great!”
      </p>
      <span className={s.main__line}></span>
      <p className={s.main__author}>Linus Torvalds</p>
      <p className={s.main__authorDescription}>
        Linux kernel creator, hacker, 1969
      </p>
      <div className={s.btn__wrapper}>
        <Link className={s.btn__QA} to={"/test"} onClick={getQuestions}>
          <span className={s.btn__QaDescription}>QA technical training</span>

          <svg className={s.btn__icon} width="24px" height="16px">
            <use xlinkHref={`${Icons}#icon-right-white`} />
          </svg>
        </Link>
        <Link className={s.btn__test} to={"/test"} onClick={getQuestions}>
          <span className={s.btn__testDescription}>Testing theory</span>
          <svg className={s.btn__icon} width="24px" height="16px">
            <use xlinkHref={`${Icons}#icon-right-white`} />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default MainPage;
