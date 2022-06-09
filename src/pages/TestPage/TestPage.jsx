import { Link, useNavigate } from "react-router-dom";
import s from "./TestPage.module.scss";
import Icons from "../../images/symbol-defs.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentTestingType,
  getTestingQuestion,
} from "../../redux/questions/questionsSelector";
import { getUserAnswer } from "../../redux/questions/questionsSlice";
import Button from "../../components/Button/Button";

const uuid = require("uuid");

const TestPage = () => {
  const [counter, setCounter] = useState(0);
  // const [btnDisable, setBtnDisable] = useState(true);
  const [userAnswer, setUserAnswer] = useState("");
  const [questionInfo, setQuestionInfo] = useState([]);

  const navigate = useNavigate();

  const testName = useSelector(getCurrentTestingType);
  const testQuestion = useSelector(getTestingQuestion);
  const dispatch = useDispatch();

  const prevQuestion = () => {
    setUserAnswer(questionInfo[counter - 1].userAnswer);

    setCounter((prev) => prev - 1);
  };

  const nextQuestion = (info) => {
    const { questionId } = info;

    setQuestionInfo((prev) => {
      const newInfo = [...prev];
      newInfo[counter] = { questionId, userAnswer };
      return newInfo;
    });

    if (counter !== 11) setCounter((prev) => prev + 1);

    questionInfo.length === counter
      ? setUserAnswer(" ")
      : setUserAnswer(questionInfo[counter + 1]?.userAnswer);
  };

  const onInputChange = (e) => {
    const userAnswer = e.target.value;
    setUserAnswer(userAnswer);
  };

  const onFinishTest = (e) => {
    navigate("../", { replace: true });
  };

  const getAnswerObj = () => {
    const questionId = testQuestion[counter]._id;
    const rightAnswer = testQuestion[counter].rightAnswer;

    nextQuestion({ questionId, rightAnswer });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (questionInfo.length === 12) {
      dispatch(getUserAnswer(questionInfo));
      navigate("../result", { replace: true });
    }

    // counter !== 0 ? setBtnDisable(false) : setBtnDisable(true);
  };

  return (
    testQuestion.length > 0 && (
      <form className={s.test} onSubmit={onFormSubmit}>
        <div className={s.wrapper}>
          <p className={s.heading}>{`[ ${testName}_]`}</p>

          <Button cta="Finish test" finish onClick={onFinishTest} />
          {/* <Link className={s.finish__btn} to={"/"} onClick={onFinishTest}>
            Finish test
          </Link> */}
        </div>

        <div className={s.question__wrapper}>
          <div className={s.question__list}>
            <p className={s.question__current}>
              Question
              <span className={s.question__list}> {`${counter + 1}`}</span> / 12
            </p>
            <div className={s.animation__wrapper}>
              <p
                className={s.question}
              >{`${testQuestion[counter]?.question}`}</p>
            </div>
            <span className={s.line}></span>

            {testQuestion[counter].answers.map((el) => {
              return (
                <div className={s.question__item} key={uuid.v4()}>
                  <label className={s.question__itemLabel} key={uuid.v4()}>
                    <input
                      type="radio"
                      checked={userAnswer ? userAnswer === `${el}` : ""}
                      className={s.radio}
                      name="answer"
                      value={el}
                      onChange={onInputChange}
                    ></input>
                    <span className={s.question__text}>{`${el}`}</span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className={s.btn__wrapper}>
          {/* <button
            className={s.btn__left}
            type="submit"
            onClick={prevQuestion}
            disabled={btnDisable}
          >
            <svg className={s.btn__leftIcon} width="24px" height="16px">
              <use xlinkHref={`${Icons}#icon-left-black`} />
            </svg>
          </button> */}
          <Button cta="Previous question" arrow onClick={prevQuestion} />
          {/* 
          <button className={s.btn__right} type="submit" onClick={getAnswerObj}>
            <svg className={s.btn__rightIcon} width="24px" height="16px">
              <use xlinkHref={`${Icons}#icon-right-black`} />
            </svg>
          </button> */}
          <Button cta="Next question" arrow onClick={getAnswerObj} />
        </div>
      </form>
    )
  );
};

export default TestPage;
