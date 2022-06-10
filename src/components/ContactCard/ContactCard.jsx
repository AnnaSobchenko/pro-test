
import s from "./ContactCard.module.scss"



const ContactCard = ({ contact }) => {

    const {avatar, name, job_title, comment} = contact;

    return (
        <div>
            <img className={s.avatar} src={require(`../ContactsItem/avatar/${avatar}`)} alt={name} />
            <div className={s.conatcInf}>
                <p className={s.name}>{name}</p>
                <p className={s.jodTitle}>{job_title}</p>
                <p className={s.comment}>{comment}</p>
            </div>
            <ul className={s.social_list}>
                                <li className={s.social_list_item}>
                                    <a href="" className={s.social_list_link}>
                                        {/* <svg className={s.social_list_link_img}>
                                            <use href="./images/sprite.svg#instagram"></use>
                                        </svg> */}
                                        <span>X</span>
                                    </a>
                                </li>
                                <li className={s.social_list_item}>
                                    <a href="" className={s.social_list_link}>
                                        {/* <svg className={s.social_list_link_img}>
                                            <use href="./images/sprite.svg#twitter"></use>
                                        </svg> */}
                                        <span>X</span>
                                    </a>
                                </li>
                                <li className={s.social_list_item}>
                                    <a href="" className={s.social_list_link}>
                                        {/* <svg className={s.social_list_link_img}>
                                            <use href="./images/sprite.svg#facebook"></use>
                                        </svg> */}
                                        <span>X</span>
                                    </a>
                                </li>
                                <li className={s.social_list_item}>
                                    <a href="" className={s.social_list_link}>
                                        {/* <svg className={s.social_list_link_img}>
                                            <use href="./images/sprite.svg#linkedin"></use>
                                        </svg> */}
                                        <span>X</span>
                                    </a>
                                </li>
                            </ul>
        </div>
    )
};

export default ContactCard;