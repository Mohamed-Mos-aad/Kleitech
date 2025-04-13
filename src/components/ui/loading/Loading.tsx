// ** Assets
import loadingIcon from '../../../assets/ui/loading/loadingIcon.svg'
// ** Style 
import style from '../../../style/components/ui/loading/loading.module.css'



export default function Loading() {
    return (
        <>
            <div className={style.loading}>
                <img src={loadingIcon} alt="Loading icon" />
            </div>
        </>
    )
}
