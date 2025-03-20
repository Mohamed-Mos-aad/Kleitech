// ** Style 
import style from '../../style/pages/main/consultation.module.css'
// ** Assets
import backIcon from '../../assets/main/consultation/backIcon.svg'
import nextIcon from '../../assets/main/consultation/nextIcon.svg'
import doctorPhoto from '../../assets/landingPage/PatientReviews/PatientReview-1.png'
// ** Components
import SectionHeader from "../../components/landing/SectionHeader";
import DoctorSearchInput from '../../components/ui/DoctorSearchInput';
import { useState } from 'react';
import { doctorsData } from '../../data';
import { useNavigate } from 'react-router-dom';






export default function Consultation() {
    // ** Default
    const navigate = useNavigate();
    // ** States
    const doctorData = doctorsData.doctorsSimple;
    const doctorsPerPage = 4;
    const totalPages = Math.ceil(doctorData.length / doctorsPerPage);
    const [pageNumber,setPageNumber] = useState(1);



    


    // ** Handlers
    const nextPageHanlder = ()=>{
        if(pageNumber < totalPages)
        {
            setPageNumber(pageNumber+1);
        }
    }
    const prevPageHanlder = ()=>{
        if(pageNumber > 1)
        {
            setPageNumber(pageNumber-1);
        }
    }
    const changePageHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
        const pagesNumbers = document.getElementsByTagName('span');
        for(let i = 0 ; i < pagesNumbers.length ; i++)
        {
            pagesNumbers[i].classList.remove('_active_page_ltnrp_205');
        }
        const target = e.target as HTMLSpanElement;
        target.classList.add(style.active_page)
        setPageNumber(Number(target.id));
    }
    const openDoctorDetailsPageHanlder = (id:number)=>{navigate(`/m/doctor/${id}`)}





    const currentDoctors = doctorData.slice((pageNumber - 1) * doctorsPerPage,pageNumber*doctorsPerPage);
    // ** Render
    const doctorDataRender = currentDoctors.map(doctor =>
            <div className={style.doctor} key={doctor.id} id={`${doctor.id}`} onClick={()=>{openDoctorDetailsPageHanlder(doctor.id)}}>
                <div className={style.doctor_img}>
                    <img src={doctorPhoto} alt="Doctor photo" />
                </div>
                <div className={style.doctor_data}>
                    <h2>{doctor.name}</h2>
                    <h3>{doctor.specialty}</h3>
                </div>
            </div>
    )
    const pagesNumebrRender = ()=>{
        const pageButtons = [];
        for(let i = 1; i <= totalPages; i++)
        {
            if(totalPages > 6)
            {
                if(i <= 3)
                {
                    pageButtons.unshift(
                        <span className={pageNumber === i ? style.active_page : ''} key={i} id={String(i)} onClick={(e)=>{changePageHandler(e)}}>{String(i)}</span>
                    )
                }
                else if(i >= (totalPages - 2))
                {
                    pageButtons.unshift(
                        <span className={pageNumber === i ? style.active_page : ''} key={i} id={String(i)} onClick={(e)=>{changePageHandler(e)}}>{String(i)}</span>
                    )
                }
                else
                {
                    pageButtons.unshift(
                        <span key={i}>...</span>
                    )
                }
            }
            else
            {
                pageButtons.unshift(
                    <span className={pageNumber === i ? style.active_page : ''} key={i} id={String(i)} onClick={(e)=>{changePageHandler(e)}}>{String(i)}</span>
                )
            }
        }

        return pageButtons;
    }






    return (
        <>
            <div className={style.consultation_container}>
                <DoctorSearchInput />
                <SectionHeader title="تواصل مع طبيبك بسهولة واطمئن على صحتك." description="نوفر لك إمكانية الوصول إلى الأطباء المختصين لتلقي الاستشارات الطبية بسهولة من أي مكان، مع متابعة حالتك الصحية أولاً بأول."/>
                <div className={style.doctors_container}>
                    {doctorDataRender}
                </div>
                <div className={style.page_number}>
                    <div className={style.state_btn} onClick={nextPageHanlder}>
                        <img src={nextIcon} alt="Next icon" />
                        التالي
                    </div>
                    <div className={style.page_number_btns}>
                        {pagesNumebrRender()}
                    </div>
                    <div className={style.state_btn} onClick={prevPageHanlder}>
                        السابق
                        <img src={backIcon} alt="Back icon" />
                    </div>
                </div>
            </div>
        </>
    )
}
