// ** Style
import style from '../../../style/components/pages/auth/platformsAuth.module.css'
// ** Assets
import {googleIcon, facebookIcon, appleIcon} from '../../../assets/icons/icons'
// ** Hooks && Tools
import { useMessagePop } from '../../../hooks/useMessagePop';



export default function PlatformsAuth() {
    // ** Defaults    
    const { showMessage } = useMessagePop();

    // ** States
    const platforms = [
        { src: appleIcon, alt: "تسجيل باستخدام Apple" },
        { src: facebookIcon, alt: "تسجيل باستخدام Facebook" },
        { src: googleIcon, alt: "تسجيل باستخدام Google" },
    ]



    // ** Handlers
    const loginWithPlatformHandler = ()=>{
        showMessage({state:'error' , content: 'غير متوفر حاليا'});
    }



    // ** Render
    const renderPlatforms = platforms.map((platform,i) => (
        <div className={style.platform_item} key={i}>
            <img src={platform.src} alt={platform.alt} onClick={loginWithPlatformHandler}/>
        </div>
    ))



    return (
        <>
            <div className={style.platforms}>
                {renderPlatforms}
            </div>
        </>
    )
}
