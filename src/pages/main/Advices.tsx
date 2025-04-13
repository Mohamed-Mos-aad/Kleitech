// ** Style
import style from '../../style/pages/main/allowAndNotAllow.module.css'
// ** assets 
import allowIcon from '../../assets/main/allow&notAllow/allowIcon.svg'
import notAllowIcon from '../../assets/main/allow&notAllow/notAllowIcon.svg'
import { useEffect, useState } from 'react';
import { fetchAdvices } from '../../api/advicesApi';
import { IAdvices } from '../../interfaces';
import Loading from '../../components/ui/loading/Loading';




export default function Advices() {
    // ** States
    const [advices,setAdvices] = useState<IAdvices>();
    const [isloading,setIsLoading] = useState<boolean>(true);







    // ** Render
    const allowFoodRender = advices?.allow.food.map((item,index) =><li key={index}>{item}</li>)
    const allowDrinksRender = advices?.allow.drinks.map((item,index) =><li key={index}>{item}</li>)
    const notAllowFoodRender = advices?.notAllow.food.map((item,index) =><li key={index}>{item}</li>)
    const notAllowDrinksRender = advices?.notAllow.drinks.map((item,index) =><li key={index}>{item}</li>)
    



    useEffect(()=>{
        const loadAdvices = async ()=>{
            try{
                const AllowingData = await fetchAdvices();
                setAdvices(AllowingData)
            }
            catch(error){
                console.log(error)
            }
            finally
            {
                setIsLoading(false);
            }
        }
        loadAdvices();
    },[])






    return (
        <>
        {
            isloading ? 
                <Loading />
            :
            <div className={style.allow_not_allow}>
                <div className={style.allowing_container}>
                    <div className={style.head_title}>
                        الأطعمه والمشروبات المسموح بها
                        <img src={allowIcon} alt="Allow icon" />
                    </div>
                    <div className={style.allowing_list}>
                        <ul>
                            <li><h4>المأكولات</h4></li>
                            {allowFoodRender}
                        </ul>
                        <ul>
                            <li><h4>المشروبات</h4></li>
                            {allowDrinksRender}
                        </ul>
                    </div>
                </div>
                <div className={style.allowing_container}>
                    <div className={style.head_title}>
                        الأطعمه والمشروبات المسموح بها
                        <img src={notAllowIcon} alt="Not allow icon" />
                    </div>
                    <div className={style.allowing_list}>
                        <ul>
                            <li><h4>المأكولات</h4></li>
                            {notAllowFoodRender}
                        </ul>
                        <ul>
                            <li><h4>المشروبات</h4></li>
                            {notAllowDrinksRender}
                        </ul>
                    </div>
                </div>
            </div>
        }
        </>
    )
}
