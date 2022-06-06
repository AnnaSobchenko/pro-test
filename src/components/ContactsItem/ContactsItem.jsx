import contacts from "../../utils/contacts/contacts.json";
import s from './ContactsItem.module.scss'

const ContactsItem = () => {
    return (<>
        {contacts.map(cont => 
            <li className="contactItem" key={cont.id}>
                <img src={cont.avatar} alt={cont.name} />
            <p>{cont.name}</p>
            <p>{cont.job_title}</p>
            <p>{cont.comment}</p>
            </li>
        )
        }
    </>)
}

export default ContactsItem;