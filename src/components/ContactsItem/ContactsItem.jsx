import s from './ContactsItem.module.scss';
import { useEffect, useState } from "react";
import { getContact } from '../../utils/fetchApi';

const ContactsItem = ({ openModal }) => {

    const [cont, setCont] = useState([])

    useEffect(() => {
        getContact().then(data => setCont(data))
    }, [])
    console.log(cont);
    return (<>
        {cont.map(cont => cont.name || cont._id || cont.avatar || cont.job_title || cont.comment ? 
            <li className={s.contactItem} key={cont._id}  onClick={() => {
                openModal(cont)
            }}>
                {/* <img className={s.avatar} src={require(`./avatar/${cont.avatar}`)} alt={cont.name} /> */}
                <img className={s.avatar} src={require(`../../images/avatar/${cont.avatar}`)} alt={cont.name} />
                <div className={s.conatcInf}>
                    <p className={s.name}>{cont.name}</p>
                    <p className={s.jodTitle}>{cont.job_title}</p>
                    <p className={s.comment}>{cont.comment}</p>
                </div>
            </li>
            :
            <li className={s.contactItem}>
                <p>Contact Not Found</p>
                <p>404</p>
            </li>
        )
        }
    </>)
}

export default ContactsItem;