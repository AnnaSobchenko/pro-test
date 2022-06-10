import React, { useState, useEffect } from "react";
import { Btn } from "./Button.style";
import google from "./../../images/Google@2x.png";
import sprite from "../../images/symbol-defs.svg";

export default function Button({
  cta = "",
  value = "",
  onClick = () => {},
  googleAuth = false,
  signButton = false,
  secondary = false,
  finish = false,
  tryAgain = false,
  arrow = false,
  disabled = false,
  type = "",
}) {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <>
      {googleAuth && (
        <Btn type="button" googleAuth onClick={onClick} value={value}>
          <img src={google} alt="googleSymbol" width="18px" height="18px" />
          {cta}
        </Btn>
      )}
      {signButton && (
        <Btn type="button" signButton secondary={secondary} onClick={onClick}>
          {cta}
        </Btn>
      )}
      {finish && (
        <Btn type="button" finish onClick={onClick} value={value}>
          {cta}
        </Btn>
      )}
      {tryAgain && (
        <Btn type="button" tryAgain onClick={onClick} value={value}>
          {cta}
        </Btn>
      )}
      {arrow && (
        <Btn
          secondary={secondary}
          arrow
          type={type}
          disabled={disabled}
          onClick={onClick}
          value={value}
        >
          <svg width="24px" height="16px">
            <use href={sprite + "#icon-arrow"} />
          </svg>
          {!isMobile && cta}
        </Btn>
      )}
    </>
  );
}
