import React from "react";
import { Btn } from "./Button.style";
import google from "./../../images/Google@2x.png";
import sprite from "../../images/symbol-defs.svg";

export default function Button({
  cta = "",
  googleAuth = false,
  signButton = false,
  secondary = false,
  finish = false,
  restart = false,
  arrow = false,
}) {
  return (
    <>
      {googleAuth && (
        <Btn googleAuth>
          <img src={google} alt="googleSymbol" width="18px" height="18px" />
          {cta}
        </Btn>
      )}
      {signButton && (
        <Btn signButton secondary={secondary}>
          {cta}
        </Btn>
      )}
      {finish && <Btn finish>{cta}</Btn>}
      {restart && <Btn restart>{cta}</Btn>}
      {arrow && (
        <Btn secondary={secondary} arrow>
          {cta}
          <svg width="24px" height="16px">
            <use href={sprite + "#icon-arrow"} />
          </svg>
        </Btn>
      )}
    </>
  );
}
