// ** Style
import style from '../../style/components/landing/sectionHeader.module.css'



// ** InterFaces
interface ISectionHeader{
    title: string,
    description: string
}



export default function SectionHeader({title,description}:ISectionHeader) {
    return (
        <>
            <div className={style.section_header}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </>
    )
}
