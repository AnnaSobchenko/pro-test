import { Link } from "react-router-dom";
import Icons from "../../images/symbol-defs.svg";
import s from "./ChooseTestingPage.madule.scss";

const ChooseTestingPage = () => {
  return (
    <section className="test">
      <p className="test-description">
        “Regression testing. What is it?
        <br />
        If the system compiles, that's good, if it boots, that's great!”
      </p>
      <span className="test-line"></span>
      <p className="test-author">Linus Torvalds</p>
      <p className="test-author__description">
        Linux kernel creator, hacker, 1969
      </p>
      <div className="btn-wrapper">
        <Link className="btn-QA" to={"/test/qa"}>
          <span className="btn-QA-description"> QA technical training</span>

          <svg className="btn-icon" width="24px" height="16px">
            <use xlinkHref={`${Icons}#icon-right-white`} />
          </svg>
        </Link>
        <Link className="btn-test" to={"/test/theori"}>
          <span className="btn-test__description">Testing theory</span>
          <svg className="btn-icon" width="24px" height="16px">
            <use xlinkHref={`${Icons}#icon-right-white`} />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default ChooseTestingPage;
