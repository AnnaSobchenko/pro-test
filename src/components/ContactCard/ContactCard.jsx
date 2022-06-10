
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
        </div>
    )
};

export default ContactCard;