import s from "./ResultPage.module.scss";
import Chart from "./Chart";
import { useSelector } from "react-redux";
import {
	getCurrentTestingType,
	getUserAnswer,
	getRightAnswers,
} from "../../redux/questions/questionsSelector";
import { useNavigate } from "react-router-dom";

import catMobOk from "../../images/cat@1x-mob-min.png";
import catMob2xOk from "../../images/cat@2x-mob-min.png";
import catTablOk from "../../images/cat@1x-tabl-min.png";
import catTabl2xOk from "../../images/cat@2x-tabl-min.png";
import catDeskOk from "../../images/cat@1x-desk-min.png";
import catDesk2xOk from "../../images/cat@2x-desk-min.png";

import catMobSad from "../../images/cat-sad-1x-mob.png";
import catMob2xSad from "../../images/cat-sad-2x-mob.png";
import catTablSad from "../../images/cat-sad-1x.png";
import catTabl2xSad from "../../images/cat-sad-2x.png";
import catDeskSad from "../../images/cat-sad-1x.png";
import catDesk2xSad from "../../images/cat-sad-2x.png";

import catMobHappy from "../../images/cat-happy-1x-mob.png";
import catMob2xHappy from "../../images/cat-happy-2x-mob.png";
import catTablHappy from "../../images/cat-happy-1x.png";
import catTabl2xHappy from "../../images/cat-happy-2x.png";
import catDeskHappy from "../../images/cat-happy-1x.png";
import catDesk2xHappy from "../../images/cat-happy-2x.png";


const ResultPage = () => {
	const navigate = useNavigate();
	const testName = useSelector(getCurrentTestingType)
	const userAnswer = useSelector(getUserAnswer);
	const rightAnswers = useSelector(getRightAnswers);

	const totalQuestions = userAnswer.length;
	const correct = rightAnswers / totalQuestions;
	const incorrect = 1 - correct;

	const onTryAgain = (e) => {
		navigate("../test", { replace: true });
	};

	const getTestFeedback = (rightAnswers) => {
		let feedback = "";
		let feedbackDetails = "";
		let catMob;
		let catMob2x;
		let catTabl;
		let catTabl2x;
		let catDesk;
		let catDesk2x;



		if (rightAnswers === 12) {
			feedback = "Perfectly!";
      feedbackDetails = "You are absolutely right! Cool!";
      catMob = catMobHappy;
      catMob2x = catMob2xHappy;
      catTabl = catTablHappy;
      catTabl2x = catTabl2xHappy;
      catDesk = catDeskHappy;
      catDesk2x = catDesk2xHappy;
		} else if (rightAnswers > 7) {
			feedback = "Not bad!";
      feedbackDetails = "But you still need to learn some materials.";
      catMob = catMobOk;
      catMob2x = catMob2xOk;
      catTabl = catTablOk;
      catTabl2x = catTabl2xOk;
      catDesk = catDeskOk;
      catDesk2x = catDesk2xOk;
		} else {
			feedback = "Badly...";
      feedbackDetails = "You need to practice more...";
      catMob = catMobSad;
			catMob2x = catMob2xSad;
			catTabl = catTablSad;
			catTabl2x = catTabl2xSad;
			catDesk = catDeskSad;
			catDesk2x = catDesk2xSad;      
		}

		return { feedback, feedbackDetails, catMob, catMob2x, catTabl, catTabl2x, catDesk, catDesk2x };
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
						srcSet={`${getTestFeedback(rightAnswers).catMob} 1x, ${
							getTestFeedback(rightAnswers).catMob2x
						} 2x`}
						media="(max-width: 767px)"
					/>
					<source
						srcSet={`${getTestFeedback(rightAnswers).catTabl} 1x, ${
							getTestFeedback(rightAnswers).catTabl2x
						} 2x`}
						media="(max-width: 1279px)"
					/>
					<source
						srcSet={`${getTestFeedback(rightAnswers).catDesk} 1x, ${
							getTestFeedback(rightAnswers).catDesk2x
						} 2x`}
						media="(min-width: 1280px)"
					/>
					<img
						className={s.result__image}
						src={`${getTestFeedback(rightAnswers).catMob}`}
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
