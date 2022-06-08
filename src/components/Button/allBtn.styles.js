import { css } from "styled-components";

export const googleButton = css`
  gap: 10px;
  padding: 17px 37px 16px 38px;
  max-width: 159px;
  max-height: 51px;
  margin: 32px auto;

  font-size: 14px;
  font-weight: 700;
  line-height: calc(17 / 14);
  background-color: var(--google-btn-bg);
  color: var(--primary-text-color);
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));

  @media (min-width: 768px) {
    margin: 32px 0;
  }
`;

export const signBtn = css`
  padding: 25px 25px 21px 25px;
  max-width: 109px;
  max-height: 60px;

  font-weight: 700;
  text-transform: uppercase;
  border: ${({ secondary }) =>
    secondary ? "1px solid var(--border-color)" : "none"};

  @media (min-width: 768px) {
    padding: 23px 77px;
    max-width: 210px;

    font-size: 12px;
    line-height: calc(15 / 12);
  }
`;

export const finishButton = css`
  max-width: 130px;
  padding: 17px 14px;

  @media (min-width: 768px) {
    max-width: 181px;
    padding: 17px 30px;

    font-size: 14px;
    line-height: calc(17 / 14);
    font-weight: 500;
  }
`;

export const arrowButton = css`
  gap: 12px;
  padding: 9px 16px 9px 15px;
  max-width: 55px;
  max-height: 34px;
  justify-content: ${({ secondary }) =>
    secondary ? "space-between" : "flex-start"};

  svg {
    ${({ secondary }) => (secondary ? "transform: rotate(180deg);" : "")};

    fill: ${({ secondary }) =>
      secondary ? "var(--primary-text-color)" : "var(--third-text-color)"};
  }

  @media (min-width: 768px) {
    ${({ secondary }) => (secondary ? "flex-direction: row-reverse;" : "")}

    max-width: 210px;
    padding: ${({ secondary }) =>
      secondary ? "9px 20px" : "9px 20px 9px 14px"};

    font-size: 12px;
    line-height: calc(14 / 12);
  }
`;

export const restartButton = css`
  max-width: 190px;
  padding: 17px 28px;
  margin: 0 auto;

  font-size: 14px;
  line-height: calc(16 / 14);

  @media (min-width: 768px) {
    max-width: 182px;
    padding: 16px 24px;
    font-weight: 500;
    line-height: calc(17 / 14);
  }
`;
