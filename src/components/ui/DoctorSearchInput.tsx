// ** Style 
import style from '../../style/components/ui/doctorSearchInput.module.css'
// ** Assets
import searchIcon from '../../assets/main/consultation/searchIcon.svg'
// ** Hooks
import { useState } from 'react'





export default function DoctorSearchInput() {
    // ** States
    const [searchStateOpen,setSearchStateOpen] = useState<boolean>(false);





    // ** Handlers
    const searchStateToggleHandler = ()=>{setSearchStateOpen(!searchStateOpen)};


    return (
        <>
            <div className={style.doctors_search}>
                {!searchStateOpen ?
                    <div className={style.icon} onClick={searchStateToggleHandler}>
                        <img src={searchIcon} alt="Search icon" />
                    </div>
                    :
                    <div className={style.doctors_search_input}>
                        <img src={searchIcon} alt="Search icon" />
                        <input type="text" placeholder='بحث' onBlur={searchStateToggleHandler}/>
                    </div>
                }
            </div>
        </>
    )
}
