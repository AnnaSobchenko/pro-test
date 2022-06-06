import contacts from "../../pages/Contacts/contacts/contacts.json";
import s from './ContactsItem.module.scss'

const ContactsItem = () => {
    return (<>
        {contacts.map(cont => 
            <li className={s.contactItem} key={cont.id} id={cont.id}>
                {/* <img className={s.avatar} src={cont.avatar} alt={cont.name} /> */}
                <img className={s.avatar} src={require(`./avatar/${cont.avatar}`)} alt={cont.name} />
                <div className={s.conatcInf}>
            <p className={s.name}>{cont.name}</p>
            <p className={s.jodTitle}>{cont.job_title}</p>
            <p className={s.comment}>{cont.comment}</p>
                </div>
            </li>
        )
        }
    </>)
}

export default ContactsItem;