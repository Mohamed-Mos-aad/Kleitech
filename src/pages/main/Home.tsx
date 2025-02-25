// ** Style
import style from '../../style/pages/main/home.module.css'
// ** assets
import homeImg from '../../assets/main/home.svg'
import uploadIcon from '../../assets/main/uploadIcon.svg'
import uploadImg from '../../assets/main/uploadImg.svg'
import closeIcon from '../../assets/main/closeIcon.svg'
import { useState } from 'react'





export default function Home() {
    // ** States
    const [uploadComponentHidden,setUploadComponentHidden] = useState<boolean>(false);





    // ** Handlers
    const uploadComponentStateToggleHandler = ()=>{setUploadComponentHidden(!uploadComponentHidden)};






    return (
        <>
            <div className={style.home}>
                <div className={style.home_container}>
                    <div className={style.home_content}>
                        <h1>رفع الأشعة المقطعية للحصول على تقرير حول حالة الكلى:</h1>
                        <p>يمكنك رفع صورة الأشعة المقطعية الخاصة بك والحصول على تقرير سريع حول حالتك الصحية. يساعدك هذا التحليل في فهم حالة الكلى بشكل أفضل، مع تحديد ما إذا كانت الكلى سليمة أو تحتوي على حصوات أو أورام. بناءً على نتائج التقرير، سيتم تحديد الخطوات المناسبة التي يجب اتخاذها. إذا كنت ترغب في استشارات إضافية أو دعم مستمر</p>
                        <button onClick={uploadComponentStateToggleHandler}>
                            رفع صوره الاشعه
                            <img src={uploadIcon} alt="Upload icon" />
                        </button>
                    </div>
                    <div className={style.home_img}>
                        <img src={homeImg} alt="Home Photo" />
                    </div>
                </div>
                {
                    uploadComponentHidden && 
                    <div className={style.upload_component}>
                        <div className={style.upload_container}>
                            <div className={style.upload_title}>
                                <h2>تحميل الوسائط</h2>
                                <p>ارفع صور الأشعة المقطعية لتحصل على تحليل سريع لحالتك الصحية</p>
                                <img src={closeIcon} alt="Close icon" onClick={uploadComponentStateToggleHandler}/>
                            </div>
                            <div className={style.upload_area}>
                                <img src={uploadImg} alt="Upload img" />
                                <h3>اسحب ملفاتك لبدأ التحميل</h3>
                                <h4><span></span>او<span></span></h4>
                                <label htmlFor="uploadFile">تصفح الملفات</label>
                                <input type="file" id='uploadFile' hidden/>
                            </div>
                            <h5>يدعم فقط jpg,svg,png,zip</h5>
                            <div className={style.upload_btns}>
                                <button onClick={uploadComponentStateToggleHandler}>إلغاء</button>
                                <button>التالي</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
