import { useParams } from "react-router-dom";

const TestPage = () => {
  //   let { questions } = useParams();

  //   const test = questions ? "Testing theory" : "QA technical training";

  //   console.log(test);
  return (
    <section>
      <p>Testing theory</p>
      <btn>Finish test</btn>

      <div>
        {/* <p>{`Question ${questions} / 12`}</p> */}
        <p></p>
      </div>
    </section>
  );
};

export default TestPage;
