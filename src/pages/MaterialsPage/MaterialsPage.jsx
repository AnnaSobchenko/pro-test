import s from "./MaterialsPage.module.scss";

const MaterialsPage = () => {
  return (
    <section className={s.materialsPage_bg}>
      <div className="container">
        <div className={s.materialsPage_wrapper}>
          <h2 className={s.subTitle}>Useful literature</h2>
          <hr />
          <ol>
            <li className={s.list_item}>
              <p className={s.text}>Testing dot.com Savin</p>
            </li>
            <li className={s.list_item}>
              <p className={s.text}>
                A mental hospital in the hands of patiens
              </p>
            </li>
            <li className={s.list_item}>
              <p className={s.text}>Scrum J.Scutherland</p>
            </li>
          </ol>
        </div>

        <div className={s.materialsPage_wrapper}>
          <h2 className={s.subTitle}>Useful resourses</h2>
          <hr />
          <ol>
            <li className={s.list_item}>
              <a
                href="https://dou.ua"
                target="_blank"
                rel="no-referrer"
                className={s.link}
              >
                dou.ua
              </a>
            </li>
            <li className={s.list_item}>
              <a
                href="https://habr.com"
                target="_blank"
                rel="no-referrer"
                className={s.link}
              >
                Habr
              </a>
            </li>
            <li className={s.list_item}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="no-referrer"
                className={s.link}
              >
                facebook.ua/QA
              </a>
            </li>
            <li className={s.list_item}>
              <a
                href="https://goit.ua"
                target="_blank"
                rel="no-referrer"
                className={s.link}
              >
                goit.ua
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default MaterialsPage;
