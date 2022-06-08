import styled from "styled-components";
import * as allBtn from "./allBtn.styles";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  font-family: ${({ googleAuth, signButton }) =>
    googleAuth || signButton
      ? '"Montserrat", sans-serif'
      : '"Montserrat Medium", sans-serif'};
  font-size: 10px;
  line-height: calc(12 / 10);
  letter-spacing: 0.02em;

  background-color: ${({ secondary }) =>
    secondary ? "var(--modal-bg-color)" : "var(--accent-button-color)"};
  color: ${({ secondary }) =>
    secondary ? "var(--primary-text-color)" : "var(--modal-bg-color)"};
  border: none;

  ${({ googleAuth }) => (googleAuth ? allBtn.googleButton : "")}
  ${({ signButton }) => (signButton ? allBtn.signBtn : "")}
  ${({ finish }) => (finish ? allBtn.finishButton : "")}
  ${({ tryAgain }) => (tryAgain ? allBtn.restartButton : "")}
  ${({ arrow }) => (arrow ? allBtn.arrowButton : "")}

    @media (min-width: 768px) {
    font-family: ${({ arrow }) =>
      arrow ? '"Montserrat Medium", sans-serif' : '"Montserrat", sans-serif'};
  }
`;
