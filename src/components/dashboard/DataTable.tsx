// ** Style
import style from '../../style/pages/dashboard/doctorsDashboard.module.css'
// ** Hooks && Tooks
import { ReactNode } from 'react'



// ** Interfaces
interface IRender{
    renderData: ReactNode
}



export default function DataTable({renderData}:IRender) {
    return (
        <>
            <div className={style.dashboard_table_container}>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>الاسم</th>
                            <th>الهاتف </th>
                            <th>الرقم القومي</th>
                            <th>البريد الالكتروني</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData}
                    </tbody>
                </table>
            </div>
        </>
    )
}
