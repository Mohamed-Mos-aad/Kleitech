// ** Style
import { IConsultationEmails } from '../../interfaces'
import style from '../../style/pages/dashboard/consultationEmails.module.css'



// ** Interfaces
interface IEmailPop{
    emailData: IConsultationEmails,
    closePop: ()=> void,
    deleteEmail: (id:string)=> void,
}



export default function EmailPop({emailData,closePop,deleteEmail}:IEmailPop) {
    return (
        <>
            <div className={style.email_pop_container}>
                <div className={style.email_data}>
                    <div className={style.email_title}>
                        <h1>{emailData.f_name + " " + emailData.l_name}</h1>
                        <h2>{emailData.email}</h2>
                    </div>
                    <div className={style.email_message}>
                        <p>{emailData.massage}</p>
                    </div>
                    <div className={style.email_btns}>
                        <button onClick={closePop}>close</button>
                        <button onClick={()=>{deleteEmail(emailData.id.toString())}}>delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
