// ** assets 
import {allowIcon, notAllowIcon} from '../../assets/icons/icons'
// ** Style
import style from '../../style/pages/main/allowAndNotAllow.module.css'
// ** Data
import { advicesData } from '../../data/main/advices';




export default function Advices() {
    // ** Render
    const allowFoodRender = advicesData?.allow.food.map((item,index) =><li key={index}>{item}</li>)
    const allowDrinksRender = advicesData?.allow.drinks.map((item,index) =><li key={index}>{item}</li>)
    const notAllowFoodRender = advicesData?.notAllow.food.map((item,index) =><li key={index}>{item}</li>)
    const notAllowDrinksRender = advicesData?.notAllow.drinks.map((item,index) =><li key={index}>{item}</li>)





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
