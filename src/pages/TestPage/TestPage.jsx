import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import s from "./TestPage.module.scss";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentTestingType,
	getTestingQuestion,
} from "../../redux/questions/questionsSelector";
import {
	// technicalQuestionsCheck,
  // theoryQuestionsCheck,
  questionsCheck,
} from "../../redux/questions/questionsOperations";
import { getUserAnswer } from "../../redux/questions/questionsSlice";
import Button from "../../components/Button/Button";

const uuid = require("uuid");

const TestPage = () => {
	const [counter, setCounter] = useState(0);
	const [btnDisable, setBtnDisable] = useState(true);
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

		if (userAnswer === "" || userAnswer === undefined) {
			Notify.failure("Please,choose answer");
			setCounter((prev) => prev);
		} else if (counter !== 11) {
			setCounter((prev) => prev + 1);
		}
		questionInfo.length === counter
			? setUserAnswer("")
			: setUserAnswer(questionInfo[counter + 1]?.userAnswer);
	};

	const onInputChange = (e) => {
		const userAnswer = e.target.value;
		setUserAnswer(userAnswer);
	};

	const onFinishTest = (e) => {
		navigate("../", { replace: true });
		Notify.info("Testing are stopped");
	};

	const getAnswerObj = (e) => {
		const questionId = testQuestion[counter]._id;
		nextQuestion({ questionId });
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
    
		if (questionInfo.length === 12) {
      
      dispatch(getUserAnswer(questionInfo));

			// if (testName === "QA technical training") {
			// 	console.log("questionInfo:", questionInfo);

			// 	dispatch(technicalQuestionsCheck(questionInfo));
			// }
			// if (testName === "Testing theory") {
			// 	console.log("questionInfo:", questionInfo);

			// 	dispatch(theoryQuestionsCheck(questionInfo));
			// }
      
      let testType;

      if (testName === "Testing theory") { 
        testType = "theory"
      }
      if (testName === "QA technical training") {
				testType = "technical";
			}

      dispatch(questionsCheck(testType, questionInfo));

			navigate("../result", { replace: true });
		}
		counter !== 0 ? setBtnDisable(false) : setBtnDisable(true);
	};

	return (
		testQuestion.length > 0 && (
			<form className={s.test} onSubmit={onFormSubmit}>
				<div className={s.wrapper}>
					<p className={s.heading}>{`[ ${testName}_]`}</p>

					<Button cta="Finish test" finish onClick={onFinishTest} />
				</div>

				<div className={s.question__wrapper}>
					<div className={s.question__list}>
						<p className={s.question__current}>
							Question
							<span className={s.question__accent}> {`${counter + 1}`}</span> / 12
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
					<Button
						cta="Previous question"
						arrow
						disabled={btnDisable}
						onClick={prevQuestion}
					/>
					<Button
						cta={counter === 11 ? "Finish testing" : "Next question"}
						arrow
						type="submit"
						secondary
						onClick={getAnswerObj}
					/>
				</div>
			</form>
		)
	);
};

export default TestPage;
