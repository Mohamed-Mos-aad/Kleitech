// ** Style 
import style from '../../style/components/ui/doctorSearchInput.module.css'
// ** Assets
import searchIcon from '../../assets/main/consultation/searchIcon.svg'
// ** Hooks
import { useEffect, useRef, useState } from 'react'




// ** Interfaces
interface IDoctorSearchInput{
    searchValue: string,
    inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>)=> void,
}


export default function DoctorSearchInput({searchValue,inputChangeHandler}:IDoctorSearchInput) {
    // ** States
    const [searchStateOpen,setSearchStateOpen] = useState<boolean>(false);


    // ** Refs
    const searchRef = useRef<HTMLDivElement>(null);



    // ** Handlers
    const searchStateToggleHandler = ()=>{setSearchStateOpen(!searchStateOpen)};





    // ** UseEffect
    useEffect(()=>{
        const clickOutSideHandler = (event: MouseEvent)=>{
            if(searchRef.current && !searchRef.current.contains(event.target as Node)){
                setSearchStateOpen(false);
            }
        }

        document.addEventListener('mousedown',clickOutSideHandler);
        return () => {
            document.removeEventListener('mousedown', clickOutSideHandler);
        };
    },[])




    return (
        <>
            <div className={style.doctors_search} role="search" aria-label="بحث عن طبيب" ref={searchRef}>
                {!searchStateOpen ?
                    <button onClick={searchStateToggleHandler}>
                        <img src={searchIcon} alt="Search icon" />
                    </button>
                    :
                    <div className={style.doctors_search_input}>
                        <img src={searchIcon} alt="Search icon" />
                        <input type="text" value={searchValue} placeholder='بحث' onChange={inputChangeHandler}/>
                    </div>
                }
            </div>
        </>
    )
}
