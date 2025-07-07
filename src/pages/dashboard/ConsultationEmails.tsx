// ** Assets
import deleteIcon from '../../assets/dashboard/home/deleteIcon.svg'
// ** Style
import style from '../../style/pages/dashboard/consultationEmails.module.css'
// ** Hooks && Tools
import { useEffect, useState } from "react"
// ** Api
import { deleteSpecialComment, fetchComments } from "../../api/comments/commentsApi"
// ** Components
import EmailPop from '../../components/dashboard/EmailPop'
import { IConsultationEmails } from '../../interfaces'



export default function ConsultationEmails() {
    // ** States
    const [emailsData,setEmailsData] = useState<IConsultationEmails[]>([]);
    const [popOpened,setPopOpened] = useState<boolean>(false);
    const [selectedEmail,setSelectedEmail] = useState<IConsultationEmails>({
        f_name: '',
        l_name: '',
        massage: '',
        created_at: '',
        id: 0,
        email: ''
    });


    
    // ** Render
    const emailsDataRender = emailsData.map(email =>
        <tr key={email.id} onClick={()=>{selectEmailHandler(email)}}>
            <td>{email.f_name + " " + email.l_name}</td>
            <td>{email.email}</td>
            <td>{email.massage}</td>
            <td>
                <button onClick={(e)=>{
                    e.stopPropagation();
                    deleteEmailHandler(email.id.toString())
                }}>
                    <img src={deleteIcon} alt="delete icon" />
                </button>
            </td>
        </tr>
    )



    // ** Handlers
    const loadDataHandlers = async ()=>{
        try{
            const res = await fetchComments();
            setEmailsData(res.data);
        }
        catch(error){
            console.log(error);
        }
    }
    const deleteEmailHandler = async (id:string)=>{
        try{
            await deleteSpecialComment(id);
            loadDataHandlers();
        }
        catch(error){
            console.log(error);
        }
    }
    const selectEmailHandler = (email:IConsultationEmails)=>{
        setSelectedEmail(email);
        popStateToggleHandler();
    }
    const popStateToggleHandler = ()=>{
        setPopOpened(!popOpened);
    }



    // ** UseEffect
    useEffect(()=>{
        loadDataHandlers();
    },[])



    return (
        <>
            <div className={style.consulation_emails_container}>
                <table>
                    <tbody>
                        {emailsDataRender}
                    </tbody>
                </table>
                {
                    popOpened && <EmailPop emailData={selectedEmail} closePop={popStateToggleHandler} deleteEmail={deleteEmailHandler}/>
                }
            </div>
        </>
    )
}
