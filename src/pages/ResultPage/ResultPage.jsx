import s from "./ResultPage.module.scss";
import Chart from "./Chart";
import { useSelector } from "react-redux";
import {
	getCurrentTestingType,
	getUserAnswer,
	getRightAnswers,
} from "../../redux/questions/questionsSelector";
import { useNavigate } from "react-router-dom";

import catMob from "../../images/cat@1x-mob-min.png";
import catMob2x from "../../images/cat@2x-mob-min.png";
import catTabl from "../../images/cat@1x-tabl-min.png";
import catTabl2x from "../../images/cat@2x-tabl-min.png";
import catDesk from "../../images/cat@1x-desk-min.png";
import catDesk2x from "../../images/cat@2x-desk-min.png";

const ResultPage = () => {
	const navigate = useNavigate();
	const testName = useSelector(getCurrentTestingType);
	const userAnswer = useSelector(getUserAnswer);
	const rightAnswers = useSelector(getRightAnswers);
	// const rightAnswers = 12;

	const totalQuestions = userAnswer.length;
	const correct = rightAnswers / totalQuestions;
	const incorrect = 1 - correct;

	const onTryAgain = (e) => {
		navigate("../test", { replace: true });
	};

	const getTestFeedback = (rightAnswers) => {
		let feedback = "";
		let feedbackDetails = "";

		if (rightAnswers === 12) {
			feedback = "Perfectly!";
			feedbackDetails = "You are absolutely right! Cool!";
		} else if (rightAnswers > 7) {
			feedback = "Not bad!";
			feedbackDetails = "But you still need to learn some materials.";
		} else {
			feedback = "Badly...";
			feedbackDetails = "You need to practice more...";
		}

		return { feedback, feedbackDetails };
	};

	return (
		<div className={s.result__body}>
			<h2 className={s.result__title}>Results</h2>
			<p className={s.result__testType}>{`[ ${testName} ]`}</p>
			<div className={s.result__chartBox}>
				<Chart correct={correct} incorrect={incorrect} />
			</div>
			<div>
				<span className={s.result__descriptionLeft}>
					Correct answers -{" "}
					<span className={s.result__score}>{`${rightAnswers}`}</span>
				</span>
				<span className={s.result__descriptionRight}>
					Total questions -{" "}
					<span className={s.result__score}>{`${totalQuestions}`}</span>
				</span>
			</div>
			<div className={s.result__imageBox}>
				<picture>
					<source
						srcSet={`${catMob} 1x, ${catMob2x} 2x`}
						media="(max-width: 767px)"
					/>
					<source
						srcSet={`${catTabl} 1x, ${catTabl2x} 2x`}
						media="(max-width: 1279px)"
					/>
					<source
						srcSet={`${catDesk} 1x, ${catDesk2x} 2x`}
						media="(min-width: 1280px)"
					/>
					<img
						className={s.result__image}
						src={`${catMob}`}
						alt="A cat with a balloon"
					/>
				</picture>
			</div>
			<div className={s.result__feedback}>
        {getTestFeedback(rightAnswers).feedback}
			</div>
			<div className={s.result__feedbackDetails}>
        {getTestFeedback(rightAnswers).feedbackDetails}
			</div>
			<button type="button" className={s.result__button} onClick={onTryAgain}>
				Try again
			</button>
		</div>
	);
};

export default ResultPage;
