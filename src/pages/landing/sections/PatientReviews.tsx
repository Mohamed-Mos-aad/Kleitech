// ** Style
import style from '../../../style/pages/landing/sections/PatientReviews.module.css'
// ** assets



// ** InterFaces
interface ISection{
    sectionId: string
}
export default function PatientReviews({sectionId}:ISection){
    return(
        <>
            <section className={style.section} id = {sectionId}>
                <h1>آراء المرضى:</h1>
            </section>
        </>
    )
}

