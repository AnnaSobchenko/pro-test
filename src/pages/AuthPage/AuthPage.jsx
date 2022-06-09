import AuthForm from "../../components/AuthForm/AuthForm"
import s from "./AuthPage.module.scss"

const AuthPage = () => {
    return   <div className={s.authPage}>
   <div className={s.authPageLeft} >   
    <h1 className={s.authPageTitle}>Pro Test</h1>
     <p className={s.authtext}>[ We will help you find weak points <br></br>
    in knowledge so that you can strengthen it. We will show you what is relevant to know for a QA Engineer and will try to make the learning process more diverse_ ]
    </p>
   </div>
     <AuthForm />
     </div>
}
 
export default AuthPage;