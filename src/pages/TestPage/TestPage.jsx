import { Link } from "react-router-dom";
import s from "./TestPage.module.scss";
import Icons from "../../images/symbol-defs.svg";

const TestPage = () => {
  return (
    <section className={s.test}>
      <div className={s.wrapper}>
        <p className={s.heading}>{`[${"Testing theory"}]`}</p>
        <Link className={s.finish__btn} to={"/"}>
          Finish test
        </Link>
      </div>

      <div className={s.question__wrapper}>
        <p className={s.question__current}>{`Question ${"5"} / 12`}</p>
        <p className={s.question}>What is regression testing?</p>
        <span className={s.line}></span>

        <ul className={s.question__list}>
          {/* ...map(el=> {
          <li></li>
        }) */}

          <li className={s.question__item}>
            <label className={s.question__itemLabel}>
              <input type="radio" className={s.radio} name="answer"></input>

              <span className={s.question__text}>
                This is testing of the main functionality of the application
              </span>
            </label>
          </li>
          <li className={s.question__item}>
            <label className={s.question__itemLabel}>
              <input type="radio" className={s.radio} name="answer"></input>

              <span className={s.question__text}>
                This is testing of the main functionality of the application
              </span>
            </label>
          </li>
        </ul>
      </div>

      <div className={s.btn__wrapper}>
        <button className={s.btn__left}>
          <svg className={s.btn__icon} width="24px" height="16px">
            <use xlinkHref={`${Icons}#icon-left-black`} />
          </svg>
        </button>
        <button>
          <svg className={s.btn__icon} width="24px" height="16px">
            <use xlinkHref={`${Icons}#icon-right-black`} />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestPage;
