import s from './ContactsItem.module.scss';
import { useEffect, useState } from "react";
import { getContact, getAvatar } from '../../utils/fetchApi';
import renderCheck from '../_shared/hooks/renderCheck'


const ContactsItem = ({ openModal }) => {

    const [cont, setCont] = useState([])

    useEffect(() => {
        getContact().then(data => setCont(data))
    }, [])
    
    useEffect(() => {
        getAvatar("tatiana_tarasovich.jpg")
    }, [])
    
    console.log(cont);
    return (<>
        {cont.map(cont => 
            <li className={s.contactItem} key={cont._id}  onClick={() => {
                openModal(cont)
            }}>
                {/* <img className={s.avatar} src={require(`./avatar/${cont.avatar}`)} alt={cont.name} /> */}
                 <img className={s.avatar} src={renderCheck(cont.avatar) ? `http://localhost:3001/avatar/${cont.avatar}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Avatar-placeholder.jpg/1200px-Avatar-placeholder.jpg'} alt={cont.name} />  
                
                <div className={s.conatcInf}>
                    <p className={s.name}>{renderCheck(cont.name) ? cont.name : 'Name Not Found'}</p>
                    <p className={s.jodTitle}>{renderCheck(cont.job_title) ? cont.job_title : 'Job title Not Found'}</p>
                    <p className={s.comment}>{renderCheck(cont.comment) ? cont.comment : 'Comment Not Found'}</p>
                </div>
            </li>
            
        )
        }
    </>)
}

export default ContactsItem;