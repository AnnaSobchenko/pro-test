import s from "./ResultPage.module.scss";

const ResultPage = () => {
	return (
		<div className={s.result__body}>
			<h2 className={s.result__title}>Results</h2>
			<p className={s.result__testType}>[ testing theory ]</p>
			<div className={s.result__chartBox}>Chart</div>
			<div>
				<span className={s.result__descriptionLeft}>
					Correct answers - <span className={s.result__score}>10</span>
				</span>
				<span className={s.result__descriptionRight}>
					Total questions - <span className={s.result__score}>12</span>
				</span>
			</div>
			<div className={s.result__imageBox}>
				<img
					className={s.result__image}
					src={require("../../images/cat@1x-mob-min.png")}
					alt="A cat with a balloon"
				/>
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
