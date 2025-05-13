// ** Assets
import searchIcon from '../../assets/dashboard/home/searchIcon.svg'
import patientsIcon from '../../assets/dashboard/home/patientsIcon.svg'
import doctorsIcon from '../../assets/dashboard/home/doctorsIcon.svg'
import visitorsIcon from '../../assets/dashboard/home/visitorsIcon.svg'
import optionsIcon from '../../assets/dashboard/home/optionsIcon.svg'
import deleteIcon from '../../assets/dashboard/home/deleteIcon.svg'
import editIcon from '../../assets/dashboard/home/editIcon.svg'
// ** Style
import style from '../../style/pages/dashboard/homeDashboard.module.css'




export default function HomeDashboard() {
    return (
        <>
            <div className={style.home_dashboard_container}>
                <div className={style.home_dashboard_data}>
                    <div className={style.search}>
                        <div className={style.search_container}>
                            <img src={searchIcon} alt="search icon" />
                            <input type="text" name="" id="" placeholder='بحث'/>
                        </div>
                    </div>
                    <div className={style.cards}>
                        <div className={style.card}>
                            <div className={style.card_title}>
                                <h2>المرضي</h2>
                            </div>
                            <div className={style.card_data}>
                                <img src={patientsIcon} alt="patients icon" />
                                <h3>200</h3>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.card_title}>
                                <h2>الاطباء</h2>
                            </div>
                            <div className={style.card_data}>
                                <img src={doctorsIcon} alt="doctors icon" />
                                <h3>100</h3>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.card_title}>
                                <h2>الزائرين</h2>
                            </div>
                            <div className={style.card_data}>
                                <img src={visitorsIcon} alt="visitors icon" />
                                <h3>250</h3>
                            </div>
                        </div>
                    </div>
                    <div className={style.table_container}>
                        <div className={style.table_title}>
                            <h1>معلومات عن المريض</h1>
                            <button>
                                <img src={optionsIcon} alt="options icon" />
                            </button>
                        </div>
                        <table className={style.table}>
                            <thead>
                                <tr>
                                    <th>الاسم</th>
                                    <th>نتيجه الاشعه</th>
                                    <th>الهاتف </th>
                                    <th>رقمالقومي</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>عزه حموده</td>
                                    <td>طبيعيه</td>
                                    <td>01008410228</td>
                                    <td>30208051201122</td>
                                    <td>
                                        <button>
                                            <img src={editIcon} alt="edit icon" />
                                        </button>
                                        <button>
                                            <img src={deleteIcon} alt="delete icon" />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>عزه حموده</td>
                                    <td>طبيعيه</td>
                                    <td>01008410228</td>
                                    <td>30208051201122</td>
                                    <td>
                                        <button>
                                            <img src={editIcon} alt="edit icon" />
                                        </button>
                                        <button>
                                            <img src={deleteIcon} alt="delete icon" />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>عزه حموده</td>
                                    <td>طبيعيه</td>
                                    <td>01008410228</td>
                                    <td>30208051201122</td>
                                    <td>
                                        <button>
                                            <img src={editIcon} alt="edit icon" />
                                        </button>
                                        <button>
                                            <img src={deleteIcon} alt="delete icon" />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>عزه حموده</td>
                                    <td>طبيعيه</td>
                                    <td>01008410228</td>
                                    <td>30208051201122</td>
                                    <td>
                                        <button>
                                            <img src={editIcon} alt="edit icon" />
                                        </button>
                                        <button>
                                            <img src={deleteIcon} alt="delete icon" />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>عزه حموده</td>
                                    <td>طبيعيه</td>
                                    <td>01008410228</td>
                                    <td>30208051201122</td>
                                    <td>
                                        <button>
                                            <img src={editIcon} alt="edit icon" />
                                        </button>
                                        <button>
                                            <img src={deleteIcon} alt="delete icon" />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
