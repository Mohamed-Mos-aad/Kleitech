// ** Style
import style from '../../../style/pages/main/home.module.css'
// ** assets
import uploadImg from '../../../assets/main/uploadImg.svg'
import closeIcon from '../../../assets/main/closeIcon.svg'
import photoIcon from '../../../assets/main/home/image.svg'
import deleteIcon from '../../../assets/main/home/deleteIcon.svg'
// ** Hooks && Tools
import { useRef, useState } from 'react'
import { uploadPhoto } from '../../../api/uploadPhotoApi'



// ** Interfaces
interface IUploadPhoto{
    close: ()=> void,
    setXrayImageUrl: (url:string)=> void,
    next: ()=> void
}

export default function UploadPhoto({close,next,setXrayImageUrl}:IUploadPhoto) {
    // ** Default 
    const startTimeRef = useRef<number>(Date.now());



    // ** States
    const [progress, setProgress] = useState<number>(0);
    const [loading,setLoading] = useState<boolean>(false);
    const [timeRemaining, setTimeRemaining] = useState<number>(0);
    const [uploadDone,setUploadDone] = useState<boolean>(false);
    const [uploadedPhotoInfo,setUploadedPhotoInfo] = useState({
        name: '',
        size: ''
    });
    const [controller, setController] = useState<AbortController | null>(null);



    
    // ** Handlers
    const uploadPhotoHandler = async (e:React.ChangeEvent<HTMLInputElement>)=>{
        const photo = e.target.files?.[0];
        if(!photo){
            return
        }
    
        const formData = new FormData();
        formData.append('file',photo);
        const abortCtrl = new AbortController();
        
        setController(abortCtrl);
        setProgress(0);
        setLoading(true);
        setTimeRemaining(0);

        startTimeRef.current = Date.now();

        try{
            const res = await uploadPhoto(formData, (progressEvent) => {
                if (progressEvent.total) {
                    const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setProgress(percent);

                    const elapsed = (Date.now() - startTimeRef.current) / 1000;
                    const speed = progressEvent.loaded / elapsed;
                    const remainingBytes = progressEvent.total - progressEvent.loaded;
                    const estimatedTime = remainingBytes / speed;
                    setTimeRemaining(Math.round(estimatedTime));
                }
            });
            const data = res;
            setUploadedPhotoInfo({name: data.image.filename,size: (data.size / (1024 * 1024)).toFixed(2).toString()});
            setXrayImageUrl(data.url)
        }
        catch(error){
            console.log(error);
        }
        finally {
            setLoading(false);
            setUploadDone(true);
        }
    }
    const deletePhotoHandler = ()=>{
        setXrayImageUrl('');
        if (controller) controller.abort();
        setLoading(false);
        setUploadDone(false);
        setProgress(0);
        setTimeRemaining(0);
        setUploadedPhotoInfo({ name: '', size: '' });
    }



    return (
        <>
            <div className={style.popUp_component}>
                <div className={style.popUp_container}>
                    <div className={style.upload_title}>
                        <h2>تحميل الوسائط</h2>
                        <p>ارفع صور الأشعة المقطعية لتحصل على تحليل سريع لحالتك الصحية</p>
                        <img src={closeIcon} alt="Close icon" onClick={close}/>
                    </div>
                    <div className={style.upload_area}>
                        <img src={uploadImg} alt="Upload img" />
                        <h3>اسحب ملفاتك لبدأ التحميل</h3>
                        <h4><span></span>او<span></span></h4>
                        <label htmlFor="uploadFile">تصفح الملفات</label>
                        <input type="file" accept='image/*' id='uploadFile' onChange={uploadPhotoHandler} hidden/>
                    </div>
                    <h5>يدعم فقط jpg, svg, png</h5>
                    {
                        loading &&
                        <div className={style.photo_upload}>
                            <div className={style.photo_upload_container}>
                                <div className={style.file_upload_details}>
                                    <h5>تحميل .......</h5>
                                    <h6>{progress}% • {timeRemaining} ثانيه متبقية</h6>
                                </div>
                                <div className={style.file_upload_options}>
                                    <button onClick={deletePhotoHandler}>
                                        <img src={deleteIcon} alt="Delete icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className={style.photo_upload_progress_bar}>
                                <div className={style.photo_upload_progress_bar_done} style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                    }
                    {
                        uploadDone && 
                        <div className={style.photo_upload}>
                            <div className={style.photo_upload_container}>
                                <div className={style.file_uploaded_details}>
                                    <img src={photoIcon} alt="Photo icon" />
                                    <div className={style.photo_details}>
                                        <h5>{uploadedPhotoInfo.name}</h5>
                                        <h6>{uploadedPhotoInfo.size}MB</h6>
                                    </div>
                                </div>
                                <div className={style.file_upload_options}>
                                    <button onClick={deletePhotoHandler}>
                                        <img src={deleteIcon} alt="Delete icon"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                    <div className={style.popUp_btns}>
                        <button onClick={close}>إلغاء</button>
                        <button onClick={next} disabled={loading || !uploadDone}>التالي</button>
                    </div>
                </div>
            </div>
        </>
    )
}
