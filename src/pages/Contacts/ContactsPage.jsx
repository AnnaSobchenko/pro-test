import ContactsItem from "../../components/ContactsItem/ContactsItem";
import Modal from "../../components/Modal/Modal";
import ContactCard from "../../components/ContactCard"
import s from './ContactsPage.module.scss';
// import styles from "../../components/Modal/Modal.module.scss";
import {  useState } from "react";


const ContactsPage = () => {
    const [modal, setModal] = useState({
        open: false,
        content: null  
    });

    const openModal = (content) => {
        setModal({
            open: true,
            content
        })
    }

    const closeModal = ()=> {
        setModal({
            open: false,
            content: null
        })
    }

    return ( 
    <>
    <div className="container">

    <div className={s.bg}>
    <h2 className={s.title}>Our team</h2>
    <div className={s.vector}></div>
    <ul className={s.conatctList}>
        <li className={s.liLogo}>
            <img className={s.liLogoImg} src={require(`../../images/logoNodejs.png`)} alt="logo"  />
        </li>
        <ContactsItem openModal={openModal}/>
    </ul>
    </div> 
    </div>
    {modal.open && <Modal handleClose={closeModal}><ContactCard contact={modal.content} /></Modal>}
    </>);
}
 
export default ContactsPage;