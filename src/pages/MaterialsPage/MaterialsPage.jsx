import s from "./MaterialsPage.module.scss"

const MaterialsPage = () => {
  return (
    <section className={s.materialsPage_bg}>
      <div className={s.materialsPage_wrapper}>
        <h2 className={s.subTitle}>Useful literature</h2>
        <hr />
        <ol>
          <li className={s.list_item}><a href="#" target="_blank" rel="no-referrer" className={s.link}>Testing dot.com Savin</a></li>
          <li className={s.list_item}><a href="#" target="_blank" rel="no-referrer" className={s.link}>A mental hospital in the hands of patiens</a></li>
          <li className={s.list_item}><a href="#" target="_blank" rel="no-referrer" className={s.link}>Scrum J.Scutherland</a></li>
        </ol>
      </div>

      <div className={s.materialsPage_wrapper}>
        <h2 className={s.subTitle}>Useful resourses</h2>
        <hr />
        <ol>
          <li className={s.list_item}><a href="https://dou.ua" target="_blank" rel="no-referrer" className={s.link}>dou.ua</a></li>
          <li className={s.list_item}><a href="https://habr.com" target="_blank" rel="no-referrer" className={s.link}>Habr</a></li>
          <li className={s.list_item}><a href="https://www.facebook.com" target="_blank" rel="no-referrer" className={s.link}>facebook.ua/QA</a></li>
          <li className={s.list_item}><a href="https://goit.ua" target="_blank" rel="no-referrer" className={s.link}>goit.ua</a></li>
        </ol>
      </div>

    </section>
  )
};

export default MaterialsPage;
