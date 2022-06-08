import styled, { css } from "styled-components";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  line-height: calc(12 / 10);
  letter-spacing: 0.02em;

  background-color: ${({ secondary }) => (secondary ? "#FFF" : "#FF6B09")};
  color: ${({ secondary }) => (secondary ? "#000" : "#FFF")};
  border: none;

  ${({ googleAuth }) => (googleAuth ? googleButton : "")}
  ${({ signButton }) => (signButton ? signBtn : "")}
  ${({ finish }) => (finish ? finishButton : "")}
  ${({ restart }) => (restart ? restartButton : "")}
  ${({ arrow }) => (arrow ? arrowButton : "")}
`;

const googleButton = css`
  gap: 10px;
  padding: 17px 37px 16px 38px;
  max-width: 160px;
  max-height: 51px;
  margin: 0 auto;

  font-size: 14px;
  font-weight: 700;
  line-height: calc(17 / 14);
  background-color: #fafafa;
  color: black;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));

  @media screen and (min-width: 768px) {
    padding: 25px 25px 21px 25px;
    max-width: 110px;
    max-height: 40px;
  }
`;

const signBtn = css`
  padding: 25px 25px 21px 25px;
  max-width: 109px;
  max-height: 60px;

  font-weight: 700;
  text-transform: uppercase;
  border: ${({ secondary }) => (secondary ? "1px solid #ced2d1" : "none")};
`;

const finishButton = css`
  max-width: 130px;
  padding: 17px 14px;
  font-family: "Montserrat Medium", sans-serif;
`;

const restartButton = css`
  max-width: 190px;
  padding: 17px 28px;
  margin: 0 auto;

  font-size: 14px;
  line-height: calc(16 / 14);
  font-family: "Montserrat Medium", sans-serif;
`;

const arrowButton = css`
  padding: 9px 16px 9px 15px;
  max-width: 55px;

  ${({ secondary }) => (secondary ? "transform: rotate(180deg);" : "")};

  svg {
    fill: ${({ secondary }) => (secondary ? "black" : "white")};
  }
`;
