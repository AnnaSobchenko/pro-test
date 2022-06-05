import s from "./MaterialsPage.module.scss"

const MaterialsPage = () => {
  return (
    <div className={s.materialsPage_bg}>
      <div className={s.materialsPage_wrapper}>
        <h2>Useful literature</h2>
        <hr />
        <ol>
          <li><a href="#" target="_blank" referrerPolicy="no-referrer">Testing dot.com Savin</a></li>
          <li><a href="#" target="_blank" referrerPolicy="no-referrer">A mental hospital in the hands of patiens</a></li>
          <li><a href="#" target="_blank" referrerPolicy="no-referrer">Scrum J.Scutherland</a></li>
        </ol>
      </div>

      <div className={s.materialsPage_wrapper}>
        <h2>Useful resourses</h2>
        <hr />
        <ol>
          <li><a href="#" target="_blank" referrerPolicy="no-referrer">dou.ua</a></li>
          <li><a href="#" target="_blank" referrerPolicy="no-referrer">Habr</a></li>
          <li><a href="#" target="_blank" referrerPolicy="no-referrer">facebook.ua/QA</a></li>
          <li><a href="#" target="_blank" referrerPolicy="no-referrer">goit.ua</a></li>
        </ol>
      </div>

    </div>
  )
};

export default MaterialsPage;
