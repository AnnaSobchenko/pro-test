// import { Link } from "react-router-dom";
// import s from "./TestPage.module.scss";
// import Icons from "../../images/symbol-defs.svg";
// const test = [
//   {
//     _id: "629d17061ca8c1a61c52a5c5",
//     question:
//       "Interface testing checks the interaction of individual modules. Most often used to test the user interface of GUI applications",
//     questionId: "25",
//     answers: [
//       "Currency testing",
//       "Testing the web application",
//       "Functional testing",
//       "Interface testing",
//       "Gamma testing",
//       "I don't know",
//     ],
//     rightAnswer: "Interface testing",
//   },
//   {
//     _id: "629d17061ca8c1a61c52a5b5",
//     question: "The correct sequence of Scrum elements",
//     questionId: "9",
//     answers: [
//       "Sprint Planning and Sprint Backlog Creation - Working on the sprint. Scrum meetings - Product testing and demonstration - Retrospective. Planning the next sprint",
//       "Creating a product backlog - Working on a sprint. Scrum meetings - Product testing and demonstration - Retrospective. Planning the next sprint",
//       "Product Backlog Creation - Sprint Planning and Sprint Backlog Creation - Product Testing and Demo - Retrospective. Planning the next sprint",
//       "Creating a Product Backlog - Planning a Sprint and creating a Sprint Backlog - Working on a Sprint. Scrum meetings - Retrospective. Planning the next sprint",
//       "Creating a Product Backlog - Planning a Sprint and creating a Sprint Backlog - Working on a Sprint. Scrum meetings - Product testing and demonstration",
//       "All options are incorrect",
//     ],
//     rightAnswer: "All options are incorrect",
//   },
//   {
//     _id: "629d17061ca8c1a61c52a5b7",
//     question: "What are the tasks of the Product Owner?",
//     questionId: "11",
//     answers: [
//       "Setting tasks and monitoring deadlines",
//       "Control of budget spending",
//       "Maintenance of project documentation (technical specifications, contracts, acts, invoices, estimates, reports)",
//       "And once again - BUDGETS and TERMS - this is what is most important in his work",
//       "All options are correct",
//       "All options are incorrect",
//     ],
//     rightAnswer: "All options are incorrect",
//   },
//   {
//     _id: "629d17061ca8c1a61c52a5b2",
//     question: "What does XP stands for in testing",
//     questionId: "6",
//     answers: [
//       "eXPerience",
//       "eXtreme Programming",
//       "eXperience Points",
//       "XP Injection",
//       "All options are correct",
//       "All options are incorrect",
//     ],
//     rightAnswer: "eXtreme Programming",
//   },
//   {
//     _id: "629d17061ca8c1a61c52a5be",
//     question: "Which of the following is superfluous",
//     questionId: "18",
//     answers: [
//       "Test plan",
//       "Bug report",
//       "Backlog",
//       "Check list",
//       "Cheat list",
//       "Set of test cases and kits",
//     ],
//     rightAnswer: "Backlog",
//   },
//   {
//     _id: "629d17061ca8c1a61c52a5b0",
//     question: "Which of the following is a MINUS in the Waterfall method?",
//     questionId: "4",
//     answers: [
//       "High transparency of development and project phases",
//       "Stability of requirements",
//       "Facilitates the work of drawing up a project plan and assembling a project team",
//       "All requirements must be known at the beginning of the project life cycle",
//       "Clear consistency",
//       "All options are correct",
//       "All options are incorrect",
//     ],
//     rightAnswer:
//       "All requirements must be known at the beginning of the project life cycle",
//   },
//   {
//     _id: "629d17061ca8c1a61c52a5c3",
//     question:
//       "This testing is done on the website to check loading, performance, security, functionality, interface, compatibility and other usability related issues",
//     questionId: "23",
//     answers: [
//       "Currency testing",
//       "Testing the web application",
//       "Functional testing",
//       "Interface testing",
//       "Gamma testing",
//       "I don't know",
//     ],
//     rightAnswer: "Testing the web application",
//   },
//   {
//     _id: "629d17061ca8c1a61c52a5ba",
//     question: "What is formal testing?",
//     questionId: "14",
//     answers: [
//       "Verification of software, according to the test plan, test procedures and relevant documentation, taking into account the wishes of the client",
//       "Validation of software, according to the test plan, test procedures and relevant documentation, taking into account the wishes of the client",
//       "Verification of software, according to test procedures and relevant documentation, without taking into account the wishes of the client",
//       "I don't know",
//     ],
//     rightAnswer:
//       "Verification of software, according to the test plan, test procedures and relevant documentation, taking into account the wishes of the client",
//   },
//   {
//     _id: "629d17061ca8c1a61c52a5bb",
//     question:
//       "The usability of the interface is usually determined through a number of qualitative indicators",
//     questionId: "15",
//     answers: [
//       "Learnability, efficiency, errors, satisfaction",
//       "Learnability, memorability, errors, satisfaction",
//       "Efficiency, memorability, errors, satisfaction",
//       "Learnability, efficiency, memorability, errors",
//       "Learnability, efficiency, memorability, errors, satisfaction",
//       "I don't know",
//     ],
//     rightAnswer: "Learnability, efficiency, memorability, errors, satisfaction",
//   },
//   {
//     _id: "629d17061ca8c1a61c52a5ae",
//     question: "Verification is – ",
//     questionId: "2",
//     answers: [
//       "In fact, it answers the question of whether the software is created and tested correctly and whether all the requirements are taken into account",
//       "During the verification process, we make sure that all the created application functionality works correctly and logically, right",
//       "The verification structure includes such components as verification of validated requirements, technical documentation and correct execution of program code at any stage of software development and testing",
//       "Options 2 and 3 are correct",
//       "All options are correct",
//       "All options are incorrect",
//     ],
//     rightAnswer: "All options are correct",
//   },
//   {
//     _id: "629d17061ca8c1a61c52a5c2",
//     question:
//       "This is a comprehensive user testing of concurrent access to an application to verify the impact on a code, module or database. Mainly detects deadlocks in code.",
//     questionId: "22",
//     answers: [
//       "Currency testing",
//       "Testing the web application",
//       "Functional testing",
//       "Interface testing",
//       "Gamma testing",
//       "I don't know",
//     ],
//     rightAnswer: "Currency testing",
//   },
//   {
//     _id: "629d17061ca8c1a61c52a5c0",
//     question: "What is superfluous in the criteria for launching testing?",
//     questionId: "20",
//     answers: [
//       "SRS - software",
//       "FRS",
//       "Use case",
//       "Test plan",
//       "All options are correct",
//       "All options are incorrect",
//     ],
//     rightAnswer: "All options are incorrect",
//   },
// ];

// const TestPage = () => {
//   return (
//     <section className={s.test}>
//       {/* <div> */}
//       <div className={s.wrapper}>
//         <p className={s.heading}>{`[${"Testing theory"}]`}</p>
//         <Link className={s.finish__btn} to={"/"}>
//           Finish test
//         </Link>
//       </div>

//       <div className={s.question__wrapper}>
//         <ul className={s.question__list}>
//           {test.map((el) => {
//             console.log("el :>> ", el);
//             return (
//               <>
//                 <p className={s.question__current}>
//                   Question <span className={s.question__list}> {`${"5"}`}</span>{" "}
//                   / 12
//                 </p>
//                 <p className={s.question}>{`${el.question}`}</p>
//                 <span className={s.line}></span>

//                 {el.answers.map((el) => {
//                   return (
//                     <li className={s.question__item}>
//                       <label className={s.question__itemLabel}>
//                         <input
//                           type="radio"
//                           className={s.radio}
//                           name="answer"
//                         ></input>

//                         <span className={s.question__text}>{`${el}`}</span>
//                       </label>
//                     </li>
//                   );
//                 })}
//               </>
//             );
//           })}

//           {/* <li className={s.question__item}>
//             <label className={s.question__itemLabel}>
//               <input type="radio" className={s.radio} name="answer"></input>

//               <span className={s.question__text}>
//                 This is testing of the main functionality of the application
//               </span>
//             </label>
//           </li>
//           <li className={s.question__item}>
//             <label className={s.question__itemLabel}>
//               <input type="radio" className={s.radio} name="answer"></input>

//               <span className={s.question__text}>
//                 This is testing of the main functionality of the application
//               </span>
//             </label>
//           </li> */}
//         </ul>
//       </div>

//       <div className={s.btn__wrapper}>
//         <button className={s.btn__left}>
//           <svg className={s.btn__leftIcon} width="24px" height="16px">
//             <use xlinkHref={`${Icons}#icon-left-black`} />
//           </svg>
//         </button>
//         <button className={s.btn__right}>
//           <svg className={s.btn__rightIcon} width="24px" height="16px">
//             <use xlinkHref={`${Icons}#icon-right-black`} />
//           </svg>
//         </button>
//       </div>
//       {/* </div> */}
//     </section>
//   );
// };

// export default TestPage;
import { Link } from "react-router-dom";
import s from "./TestPage.module.scss";
import Icons from "../../images/symbol-defs.svg";
import { useEffect, useState } from "react";
const test = [
  {
    _id: "629d17061ca8c1a61c52a5c5",
    question:
      "Interface testing checks the interaction of individual modules. Most often used to test the user interface of GUI applications",
    questionId: "25",
    answers: [
      "Currency testing",
      "Testing the web application",
      "Functional testing",
      "Interface testing",
      "Gamma testing",
      "I don't know",
    ],
    rightAnswer: "Interface testing",
  },
  {
    _id: "629d17061ca8c1a61c52a5b5",
    question: "The correct sequence of Scrum elements",
    questionId: "9",
    answers: [
      "Sprint Planning and Sprint Backlog Creation - Working on the sprint. Scrum meetings - Product testing and demonstration - Retrospective. Planning the next sprint",
      "Creating a product backlog - Working on a sprint. Scrum meetings - Product testing and demonstration - Retrospective. Planning the next sprint",
      "Product Backlog Creation - Sprint Planning and Sprint Backlog Creation - Product Testing and Demo - Retrospective. Planning the next sprint",
      "Creating a Product Backlog - Planning a Sprint and creating a Sprint Backlog - Working on a Sprint. Scrum meetings - Retrospective. Planning the next sprint",
      "Creating a Product Backlog - Planning a Sprint and creating a Sprint Backlog - Working on a Sprint. Scrum meetings - Product testing and demonstration",
      "All options are incorrect",
    ],
    rightAnswer: "All options are incorrect",
  },
  {
    _id: "629d17061ca8c1a61c52a5b7",
    question: "What are the tasks of the Product Owner?",
    questionId: "11",
    answers: [
      "Setting tasks and monitoring deadlines",
      "Control of budget spending",
      "Maintenance of project documentation (technical specifications, contracts, acts, invoices, estimates, reports)",
      "And once again - BUDGETS and TERMS - this is what is most important in his work",
      "All options are correct",
      "All options are incorrect",
    ],
    rightAnswer: "All options are incorrect",
  },
  {
    _id: "629d17061ca8c1a61c52a5b2",
    question: "What does XP stands for in testing",
    questionId: "6",
    answers: [
      "eXPerience",
      "eXtreme Programming",
      "eXperience Points",
      "XP Injection",
      "All options are correct",
      "All options are incorrect",
    ],
    rightAnswer: "eXtreme Programming",
  },
  {
    _id: "629d17061ca8c1a61c52a5be",
    question: "Which of the following is superfluous",
    questionId: "18",
    answers: [
      "Test plan",
      "Bug report",
      "Backlog",
      "Check list",
      "Cheat list",
      "Set of test cases and kits",
    ],
    rightAnswer: "Backlog",
  },
  {
    _id: "629d17061ca8c1a61c52a5b0",
    question: "Which of the following is a MINUS in the Waterfall method?",
    questionId: "4",
    answers: [
      "High transparency of development and project phases",
      "Stability of requirements",
      "Facilitates the work of drawing up a project plan and assembling a project team",
      "All requirements must be known at the beginning of the project life cycle",
      "Clear consistency",
      "All options are correct",
      "All options are incorrect",
    ],
    rightAnswer:
      "All requirements must be known at the beginning of the project life cycle",
  },
  {
    _id: "629d17061ca8c1a61c52a5c3",
    question:
      "This testing is done on the website to check loading, performance, security, functionality, interface, compatibility and other usability related issues",
    questionId: "23",
    answers: [
      "Currency testing",
      "Testing the web application",
      "Functional testing",
      "Interface testing",
      "Gamma testing",
      "I don't know",
    ],
    rightAnswer: "Testing the web application",
  },
  {
    _id: "629d17061ca8c1a61c52a5ba",
    question: "What is formal testing?",
    questionId: "14",
    answers: [
      "Verification of software, according to the test plan, test procedures and relevant documentation, taking into account the wishes of the client",
      "Validation of software, according to the test plan, test procedures and relevant documentation, taking into account the wishes of the client",
      "Verification of software, according to test procedures and relevant documentation, without taking into account the wishes of the client",
      "I don't know",
    ],
    rightAnswer:
      "Verification of software, according to the test plan, test procedures and relevant documentation, taking into account the wishes of the client",
  },
  {
    _id: "629d17061ca8c1a61c52a5bb",
    question:
      "The usability of the interface is usually determined through a number of qualitative indicators",
    questionId: "15",
    answers: [
      "Learnability, efficiency, errors, satisfaction",
      "Learnability, memorability, errors, satisfaction",
      "Efficiency, memorability, errors, satisfaction",
      "Learnability, efficiency, memorability, errors",
      "Learnability, efficiency, memorability, errors, satisfaction",
      "I don't know",
    ],
    rightAnswer: "Learnability, efficiency, memorability, errors, satisfaction",
  },
  {
    _id: "629d17061ca8c1a61c52a5ae",
    question: "Verification is – ",
    questionId: "2",
    answers: [
      "In fact, it answers the question of whether the software is created and tested correctly and whether all the requirements are taken into account",
      "During the verification process, we make sure that all the created application functionality works correctly and logically, right",
      "The verification structure includes such components as verification of validated requirements, technical documentation and correct execution of program code at any stage of software development and testing",
      "Options 2 and 3 are correct",
      "All options are correct",
      "All options are incorrect",
    ],
    rightAnswer: "All options are correct",
  },
  {
    _id: "629d17061ca8c1a61c52a5c2",
    question:
      "This is a comprehensive user testing of concurrent access to an application to verify the impact on a code, module or database. Mainly detects deadlocks in code.",
    questionId: "22",
    answers: [
      "Currency testing",
      "Testing the web application",
      "Functional testing",
      "Interface testing",
      "Gamma testing",
      "I don't know",
    ],
    rightAnswer: "Currency testing",
  },
  {
    _id: "629d17061ca8c1a61c52a5c0",
    question: "What is superfluous in the criteria for launching testing?",
    questionId: "20",
    answers: [
      "SRS - software",
      "FRS",
      "Use case",
      "Test plan",
      "All options are correct",
      "All options are incorrect",
    ],
    rightAnswer: "All options are incorrect",
  },
];

const TestPage = () => {
  const [counter, setCounter] = useState(0);

  const prevQuestion = () => {
    return setCounter((prev) => prev - 1);
  };
  const nextQuestion = () => {
    return setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("after :>> ", counter);
  }, [counter]);

  return (
    <section className={s.test}>
      {/* <div> */}
      <div className={s.wrapper}>
        <p className={s.heading}>{`[${"Testing theory"}]`}</p>
        <Link className={s.finish__btn} to={"/"}>
          Finish test
        </Link>
      </div>

      <div className={s.question__wrapper}>
        <ul className={s.question__list}>
          <>
            <p className={s.question__current}>
              Question
              <span className={s.question__list}> {`${counter + 1}`}</span> / 12
            </p>
            <p className={s.question}>{`${test[counter].question}`}</p>
            <span className={s.line}></span>

            {test[counter].answers.map((el) => {
              return (
                <li className={s.question__item} key={test[counter].questionId}>
                  <label className={s.question__itemLabel}>
                    <input
                      type="radio"
                      className={s.radio}
                      name="answer"
                    ></input>

                    <span className={s.question__text}>{`${el}`}</span>
                  </label>
                </li>
              );
            })}
          </>
        </ul>
      </div>

      <div className={s.btn__wrapper}>
        <button className={s.btn__left} onClick={prevQuestion}>
          <svg className={s.btn__leftIcon} width="24px" height="16px">
            <use xlinkHref={`${Icons}#icon-left-black`} />
          </svg>
        </button>
        <button className={s.btn__right} onClick={nextQuestion}>
          <svg className={s.btn__rightIcon} width="24px" height="16px">
            <use xlinkHref={`${Icons}#icon-right-black`} />
          </svg>
        </button>
      </div>
      {/* </div> */}
    </section>
  );
};

export default TestPage;
