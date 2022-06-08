import s from "./ResultPage.module.scss";
import Chart from './Chart'

import catMob from "../../images/cat@1x-mob-min.png";
import catMob2x from "../../images/cat@2x-mob-min.png";
import catTabl from "../../images/cat@1x-tabl-min.png";
import catTabl2x from "../../images/cat@2x-tabl-min.png";
import catDesk from "../../images/cat@1x-desk-min.png";
import catDesk2x from "../../images/cat@2x-desk-min.png";

const ResultPage = () => {
	return (
		<div className={s.result__body}>
			<h2 className={s.result__title}>Results</h2>
			<p className={s.result__testType}>{`[ testing theory ]`}</p>
			<div className={s.result__chartBox}>
				<Chart />
			</div>
			<div>
				<span className={s.result__descriptionLeft}>
					Correct answers - <span className={s.result__score}>10</span>
				</span>
				<span className={s.result__descriptionRight}>
					Total questions - <span className={s.result__score}>12</span>
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
			<div className={s.result__feedback}>Not bad!</div>
			<div className={s.result__feedbackDetails}>
				But you still need to learn some materials.
			</div>
			<button type="button" className={s.result__button}>
				Try again
			</button>
		</div>
	);
};

export default ResultPage;
