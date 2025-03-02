// ** Style
import style from '../../style/pages/main/allowAndNotAllow.module.css'
// ** assets 
import allowIcon from '../../assets/main/allow&notAllow/allowIcon.svg'
import notAllowIcon from '../../assets/main/allow&notAllow/notAllowIcon.svg'
import { allowAndNotAllowData } from '../../data'




export default function AllowAndNotAllow() {
    // ** States
    const AllowingData = allowAndNotAllowData;







    // ** Render
    const allowFoodRender = AllowingData.allow.food.map((item,index) =><li key={index}>{item}</li>)
    const allowDrinksRender = AllowingData.allow.drinks.map((item,index) =><li key={index}>{item}</li>)
    const notAllowFoodRender = AllowingData.notAllow.food.map((item,index) =><li key={index}>{item}</li>)
    const notAllowDrinksRender = AllowingData.notAllow.drinks.map((item,index) =><li key={index}>{item}</li>)
    

    return (
        <>
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
        </>
    )
}
