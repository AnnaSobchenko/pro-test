import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footerContainer}>
      <p>
        © 2022 | All Rights Reserved |&nbsp; Developed with
        <span className={s.footerHeart}> ❤ </span>
      </p>
      <p> by IT-Creatives</p>
    </footer>
  );
};

export default Footer;
