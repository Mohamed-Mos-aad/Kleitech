// ** Assets
import searchIcon from '../../assets/dashboard/home/searchIcon.svg'
// ** Style
import style from '../../style/pages/dashboard/doctorsDashboard.module.css'



// ** Interfaces
interface ISearchElement{
    data: {
        id: number,
        name: string,
        email: string,
        nationalId: string,
        phone: string
    }[],
    setResult: (result: {
        id: number,
        name: string,
        email: string,
        nationalId: string,
        phone: string
    }[])=> void 
}


export default function SearchElement({data,setResult}:ISearchElement) {
    // ** Handlers
    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const searchValue = e.currentTarget.value.toLowerCase();
        const filteredData = data.filter(doctor =>
            doctor.name.toLowerCase().includes(searchValue) ||
            doctor.email.toLowerCase().includes(searchValue) ||
            doctor.nationalId.includes(searchValue) || 
            doctor.phone.includes(searchValue)
        );
        setResult(filteredData);
    }



    return (
        <>
            <div className={style.search_container}>
                <img src={searchIcon} alt="search icon" />
                <input type="text" name="" id="" placeholder='بحث' onChange={(e)=>{searchHandler(e)}}/>
            </div>
        </>
    )
}
