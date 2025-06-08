// ** Style
import style from '../../../style/pages/main/home.module.css'
// ** assets
import downloadIcon from '../../../assets/main/home/downloadIcon.svg'
import shareIcon from '../../../assets/main/home/shareIcon.svg'
import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';


// ** Interface
interface IResult{
    xrayImageUrl: string,
}
export default function XrayResultPopup({xrayImageUrl}:IResult) {
    // ** Store
    const homeAi = useSelector((state: RootState) => state.homeAi);



    // ** States
    const [result,setResult] = useState<string>('')
    // ** Ref
    const resultRef = useRef<HTMLDivElement | null>(null);



    // ** Handlers
    const downloadHandler = async ()=>{
        if(resultRef.current)
        {
            const canvas = await html2canvas(resultRef.current);
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'xray-result.png';
            link.click();
        }
    }

    
    const shareHandler = async ()=>{
        if (resultRef.current && navigator.canShare)
        {
            const canvas = await html2canvas(resultRef.current);
            canvas.toBlob(async (blob) => {
                if (!blob) return

                const file = new File([blob], 'xray-result.png', { type: 'image/png' })

                if (navigator.canShare({ files: [file] })) {
                    await navigator.share({
                        files: [file],
                        title: 'نتيجة الأشعة',
                        text: 'نتيجة الأشعة الخاصة بك',
                    })
                } else {
                    alert('المشاركة غير مدعومة على هذا المتصفح')
                }
            })
        }
    }



    // ** UseEffect
    useEffect(() => {
        switch (homeAi.ResultIs) {
            case 'Normal':
            setResult('لا يوجد أمراض');
            break;
            case 'Cyst':
            setResult('يوجد كيس دهني');
            break;
            case 'Stone':
            setResult('يوجد حصي');
            break;
            case 'يوجد ورم':
            setResult(homeAi.ResultIs);
            break;
            default:
            setResult('نتيجة غير معروفة');
        }
    }, [homeAi.ResultIs]);


    
    return (
        <>
            <div className={style.popUp_component}>
                <div className={`${style.popUp_container} ${style.result}`}>
                    <div className={style.result_container} ref={resultRef}>
                        <h2>نتيجه الاشعه</h2>
                        <div className={style.xray_photo}>
                            <img src={xrayImageUrl} alt="صورة الأشعة الخاصة بالمريض" />
                        </div>
                        <h3>{result}</h3>
                    </div>
                    <div className={`${style.popUp_btns} ${style.result}`}>
                        <button onClick={downloadHandler}>
                            تنزيل النتيجه
                            <img src={downloadIcon} alt="Download icon" />
                        </button>
                        <button onClick={shareHandler}>
                            مشاركه النتيجه
                            <img src={shareIcon} alt="Share icon" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}