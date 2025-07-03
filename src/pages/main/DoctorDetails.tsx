  // ** Assets
  import { leftIcon } from "../../assets/icons/icons";
  // ** Style
  import style from "../../style/pages/main/doctorDetails.module.css";
  // ** Hooks && Tools
  import { useNavigate, useParams } from "react-router-dom";
  import { useEffect, useState } from "react";
  // ** Components
  import Booking from "../../components/ui/Booking";
  import BookingDone from "../../components/ui/BookingDone";
  import Loading from "../../components/ui/loading/Loading";
  // ** Interfaces
  import { IDoctorsData } from "../../interfaces";
  // ** Api
  import { fetchDoctors } from "../../api/doctorsApi";
  import DoctorData from "../../components/pages/doctorDetails/DoctorData";
  

  export default function DoctorDetails() {
    // Defaults
    const { id } = useParams();
    const navigate = useNavigate();

    // ** States
    const [doctor, setDoctor] = useState<IDoctorsData>();
    const [bookingOpened, setBookingOpened] = useState<boolean>(false);
    const [bookingDoneOpened, setBookingDoneOpened] = useState<boolean>(false);
    const [isloading, setIsLoading] = useState<boolean>(true);
    const [bookingData, setBookingData] = useState({
      userName: "",
      userPhone: "",
      bookingDate: "",
    });

    // ** Handlers
    const handleBookingClick = (time: string, status: boolean) => {
      if (!status) {
        setBookingOpened(true);
        setBookingData((prev) => ({
          ...prev,
          bookingDate: time,
        }));
      }
    };
    const handleChatOpen = async (id: number | undefined) => {
      if (id && doctor) {
        navigate(`/chats/${doctor.id}`);
      }
    };
    const saveBookingDataHandler = (
      userName: string,
      userPhone: string,
      bookingDate: string
    ) => {
      setBookingData({
        userName,
        userPhone,
        bookingDate,
      });
    };

    // ** Renders
    const renderDayTable = (dayIndex: number, label: string) => {
      if (!doctor) return null;
      const dayData = doctor.availability[dayIndex];
      if (!dayData) return null;
      return (
        <div className={style.table}>
          <ul>
            <li>{label}</li>
            {doctor.availability[dayIndex].map((day, index) => (
              <li
                className={day.status ? style.time_done : ""}
                key={`second${index}`}
                onClick={() => {
                  handleBookingClick(
                    `من ${doctor.availability[dayIndex][index].time} الي ${
                      doctor.availability[dayIndex][index + 1].time
                    }`,
                    day.status
                  );
                }}
              >
                من {day.time}
                <br />
                حتى{doctor.availability[dayIndex]?.[index + 1]?.time}
              </li>
            ))}
          </ul>
        </div>
      );
    };

    // ** UseEffect
    useEffect(() => {
      const loadDoctor = async () => {
        try {
          const doctorData = await fetchDoctors();
          if (id) {
            setDoctor(
              doctorData.doctors.find(
                (doctor: IDoctorsData) => doctor.id.toString() === id
              )
            );
          }
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      loadDoctor();
    }, [id]);

    if (!doctor) return;

    return (
      <>
        {isloading ? (
          <Loading />
        ) : (
          <div className={style.doctor_details_container}>
            <DoctorData
              doctor={doctor}
              openChat={() => {
                handleChatOpen(doctor.id);
              }}
            />
            <div className={style.doctor_time_tables}>
              <button>
                <img src={leftIcon} alt="left icon" />
              </button>
              <div className={style.tables}>
                {renderDayTable(0, "اليوم")}
                {renderDayTable(1, "غداً")}
                {renderDayTable(2, "اليوم الثالث")}
              </div>
              <button>
                <img src={leftIcon} alt="right icon" />
              </button>
            </div>
            {bookingOpened && (
              <Booking
                setBookingOpened={setBookingOpened}
                setBookingDoneOpened={setBookingDoneOpened}
                saveBookingData={saveBookingDataHandler}
                bookingDate={bookingData.bookingDate}
              />
            )}
            {bookingDoneOpened && (
              <BookingDone
                address={doctor.location}
                cost={doctor.price}
                date={bookingData.bookingDate}
                doctorName={doctor.name}
                patientName={bookingData.userName}
                patientPhone={bookingData.userPhone}
                waitTime={"20"}
              />
            )}
          </div>
        )}
      </>
    );
  }
