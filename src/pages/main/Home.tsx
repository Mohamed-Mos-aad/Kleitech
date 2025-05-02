// ** Style
import style from '../../style/pages/main/home.module.css'
// ** assets
import homeImg from '../../assets/main/home.svg'
import uploadIcon from '../../assets/main/uploadIcon.svg'
// ** Hooks && Tools
import { useState } from 'react'
// ** Components
import UploadPhoto from '../../components/pages/home/UploadPhoto'
import XrayResultPopup from '../../components/pages/home/XrayResultPopup'





export default function Home() {
    // ** States
    const [isUploadVisible, setIsUploadVisible] = useState(false);
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [xrayImageUrl,setXrayImageUrl] = useState<string>('');



    // ** Handlers
    const toggleUpload = ()=>{setIsUploadVisible(prev => !prev)};
    const showResult = ()=>{setIsResultVisible(true)};




    return (
        <>
            <div className={style.home}>
                <div className={style.home_container}>
                    <div className={style.home_content}>
                        <h1>رفع الأشعة المقطعية للحصول على تقرير حول حالة الكلى:</h1>
                        <p>يمكنك رفع صورة الأشعة المقطعية الخاصة بك والحصول على تقرير سريع حول حالتك الصحية. يساعدك هذا التحليل في فهم حالة الكلى بشكل أفضل، مع تحديد ما إذا كانت الكلى سليمة أو تحتوي على حصوات أو أورام. بناءً على نتائج التقرير، سيتم تحديد الخطوات المناسبة التي يجب اتخاذها. إذا كنت ترغب في استشارات إضافية أو دعم مستمر</p>
                        <button onClick={toggleUpload}>
                            رفع صوره الاشعه
                            <img src={uploadIcon} alt="Upload icon" />
                        </button>
                    </div>
                    <div className={style.home_img}>
                        <img src={homeImg} alt="Home Photo" />
                    </div>
                </div>
                {
                    isUploadVisible && 
                    <UploadPhoto close={toggleUpload} setXrayImageUrl={setXrayImageUrl} next={showResult}/>
                }
                {
                    isResultVisible && xrayImageUrl &&
                    <XrayResultPopup xrayImageUrl={xrayImageUrl}/>
                }
            </div>
        </>
    )
}
