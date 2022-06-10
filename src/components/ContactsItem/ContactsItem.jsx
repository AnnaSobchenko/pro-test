import s from './ContactsItem.module.scss';
import { useEffect, useState } from "react";
import {getContact} from '../../utils/fetchApi';

const ContactsItem = ({ openModal }) => {
    const [cont, setCont] = useState([])
useEffect( () => {
     getContact().then(data => setCont(data) )
},[])
    return (<>
        {cont.map(cont => 
            <li className={s.contactItem} key={cont.id} id={cont.id} onClick={() => {
                openModal(cont)
            }}>
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