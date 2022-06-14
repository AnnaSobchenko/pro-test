import { getResume } from "../../utils/fetchApi"
import renderCheck from "../_shared/hooks/renderCheck"
import s from "./ContactCard.module.scss"
import { AiFillFilePdf } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";


const ContactCard = ({ contact }) => {

    const { avatar, name, job_title, comment, links } = contact;


    const downloadClickHandler = (e) => {
        e.preventDefault();
        getResume(links.resume)
    };

    return (
        <div className={s.contactWrapper}>
            <img className={s.avatar} src={require(`../../images/avatar/${avatar}`)} alt={name} />
            <div className={s.conatcInf}>
                <p className={s.name}>{name}</p>
                <p className={s.jodTitle}>{job_title}</p>
                <p className={s.comment}>{comment}</p>
            </div>

            <ul className={s.social_list}>
                {renderCheck(links.linkedin) &&
                    <li className={s.social_list_item}>
                        <a href={links.linkedin} className={s.social_list_link} target="_blank" rel="no-referrer">
                            <AiFillLinkedin size="50px"/>
                        </a>
                    </li>
                }

                {renderCheck(links.github) &&
                    <li className={s.social_list_item}>
                        <a href={links.github} className={s.social_list_link} target="_blank" rel="no-referrer">
                            <AiFillGithub size="50px" />
                        </a>
                    </li>
                }

                {renderCheck(links.email) &&
                    <li className={s.social_list_item}>
                        <a href={`mailto:${links.email}`} className={s.social_list_link} target="_blank" rel="no-referrer">
                            <AiFillMail size="50px" />
                        </a>
                    </li>
                }

                {renderCheck(links.resume) &&
                    <li className={s.social_list_item}>
                        <a href="" className={s.social_list_link} target="_blank" rel="no-referrer" onClick={downloadClickHandler}>
                            <AiFillFilePdf size="50px" />
                        </a>
                    </li>
                }

            </ul>
        </div>
    )
};

export default ContactCard;