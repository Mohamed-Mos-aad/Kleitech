// ** Style 
import style from '../../style/pages/main/consultation.module.css'
// ** Assets
import backIcon from '../../assets/main/consultation/backIcon.svg'
import nextIcon from '../../assets/main/consultation/nextIcon.svg'
import noPhoto from '../../assets/main/consultation/noPhoto.png'
// ** Components
import SectionHeader from "../../components/landing/SectionHeader";
import DoctorSearchInput from '../../components/ui/DoctorSearchInput';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDoctors } from '../../api/doctorsApi';
import { IDoctorsSimpleData } from '../../interfaces';
import DoctorSkeleton from '../../components/ui/consultation/DoctorSkeleton';






export default function Consultation() {
    // ** Default
    const navigate = useNavigate();
    // ** States
    const [doctors,setDoctors] = useState<IDoctorsSimpleData[]>([]);
    const doctorsPerPage = 4;
    const [pageNumber,setPageNumber] = useState(1);
    const [isloading,setIsLoading] = useState<boolean>(true);
    const [searchValue,setSearchValue] = useState<string>('');
    const normalizeArabic = (text: string) =>
        text.replace(/[\u064B-\u0652]/g, '')
            .replace(/أ|إ|آ/g, 'أ')
            .replace(/ى/g, 'ي')
            .replace(/ة/g, 'ه')
            .replace(/ئ/g, 'ي')
            .replace(/ؤ/g, 'و')
            .replace(/\s+/g, ' ')
            .trim();
    const filteredDoctors = useMemo(()=>
        doctors.filter(doctor=> normalizeArabic(doctor.name).includes(normalizeArabic(searchValue))),
        [doctors,searchValue]
    )
    const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);


    


    // ** Handlers
    const nextPageHandler = ()=>{
        if(pageNumber < totalPages)
        {
            setPageNumber(pageNumber+1);
        }
    }
    const prevPageHandler = ()=>{
        if(pageNumber > 1)
        {
            setPageNumber(pageNumber-1);
        }
    }
    const changePageHandler = (newPage:number)=>{
        if (newPage !== pageNumber)
        {
            setPageNumber(newPage);
        }
    }
    const openDoctorDetailsPageHandler = useCallback((id:number)=>{navigate(`/m/doctor/${id}`)},[navigate]);
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setSearchValue(e.currentTarget.value);
    }




    const currentDoctors = filteredDoctors.slice((pageNumber - 1) * doctorsPerPage,pageNumber*doctorsPerPage);

    // ** Render
    const doctorDataRender = currentDoctors.map(doctor =>
            <div className={style.doctor} key={doctor.id} id={`${doctor.id}`} onClick={()=>{openDoctorDetailsPageHandler(doctor.id)}}>
                <div className={style.doctor_img}>
                    <img src={doctor.photo || noPhoto} alt="Doctor photo" />
                </div>
                <div className={style.doctor_data}>
                    <h2>{doctor.name}</h2>
                    <h3>{doctor.specialty}</h3>
                </div>
            </div>
    )
    const pagesNumebrRender = ()=>{
        const elements = [];
        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) {
                elements.unshift(renderPageButton(i));
            }
        }
        else 
        {
            elements.unshift(renderPageButton(1));
            if (pageNumber > 3) elements.unshift(<span key="start-dots">...</span>);
    
            const start = Math.max(2, pageNumber - 1);
            const end = Math.min(totalPages - 1, pageNumber + 1);
            for (let i = start; i <= end; i++) 
            {
                elements.unshift(renderPageButton(i));
            }
    
            if (pageNumber < totalPages - 2) elements.unshift(<span key="end-dots">...</span>);
            elements.unshift(renderPageButton(totalPages));
        }
        return elements;
    };

    const renderPageButton = useCallback((page: number) => (
        <span
            key={page}
            onClick={() => changePageHandler(page)}
            className={pageNumber === page ? style.active_page : ''}
        >
            {page}
        </span>
    ),[pageNumber,changePageHandler])





    useEffect(()=>{
        const loadDoctors = async ()=>{
            try{
                const doctorsData = await fetchDoctors();
                setDoctors(doctorsData.doctorsSimple);
            }
            catch(error)
            {
                console.log(error);
            }
            finally
            {
                setIsLoading(false);
            }
        }
        loadDoctors();
    },[])







    return (
        <>
            <div className={style.consultation_container}>
                <DoctorSearchInput searchValue={searchValue} inputChangeHandler={inputChangeHandler}/>
                <SectionHeader title="تواصل مع طبيبك بسهولة واطمئن على صحتك." description="نوفر لك إمكانية الوصول إلى الأطباء المختصين لتلقي الاستشارات الطبية بسهولة من أي مكان، مع متابعة حالتك الصحية أولاً بأول."/>
                {
                    isloading ? 
                    <DoctorSkeleton />
                    :
                    <div className={style.doctors_container}>
                        {doctorDataRender}
                    </div>
                }
                <div className={style.page_number}>
                    <div className={style.state_btn} onClick={nextPageHandler}>
                        <img src={nextIcon} alt="Next icon" />
                    </div>
                    <div className={style.page_number_btns}>
                        {pagesNumebrRender()}
                    </div>
                    <div className={style.state_btn} onClick={prevPageHandler}>
                        <img src={backIcon} alt="Back icon" />
                    </div>
                </div>
            </div>
        </>
    )
}
