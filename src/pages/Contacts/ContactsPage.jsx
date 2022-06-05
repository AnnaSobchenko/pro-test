import ContactsItem from "../../components/ContactsItem/ContactsItem";
import s from './ContactsPage.module.scss';
const ContactsPage = () => {
    return ( <div>
    <h2 className={s.title}>Our team</h2>
    <div className={s.vector}></div>
    <ul className={s.conatctList}>
        <ContactsItem/>
    </ul>
    </div> );
}
 
export default ContactsPage;