// import { useParams } from "react-router-dom";
import s from "./TestPage.module.scss";

const TestPage = () => {
  //   let { questions } = useParams();

  //   const test = questions ? "Testing theory" : "QA technical training";

  //   console.log(test);
  return (
    <section>
      <p>Testing theory</p>
      <button>Finish test</button>

      <div className={s.wrapper}>
        {/* <p>{`Question ${questions} / 12`}</p> */}
        <p></p>
      </div>
    </section>
  );
};

export default TestPage;
