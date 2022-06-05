import contacts from "../../pages/Contacts/contacts.json";

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