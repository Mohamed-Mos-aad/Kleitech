// ** Style
import style from '../../../style/components/pages/auth/platformsAuth.module.css'
// ** Assets
import {googleIcon, facebookIcon, appleIcon} from '../../../assets/icons/icons'



export default function PlatformsAuth() {
    // ** States
    const platforms = [
        { src: appleIcon, alt: "تسجيل باستخدام Apple" },
        { src: facebookIcon, alt: "تسجيل باستخدام Facebook" },
        { src: googleIcon, alt: "تسجيل باستخدام Google" },
    ]



    // ** Render
    const renderPlatforms = platforms.map((platform,i) => (
        <div className={style.platform_item} key={i}>
            <img src={platform.src} alt={platform.alt} />
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
