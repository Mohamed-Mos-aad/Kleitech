// ** Hooks && Tools
import { format } from 'date-fns';
// ** Interfaces
import { IAlarmData } from '../interfaces';

export function checkAndRedirectReminder(
    alarmData: {medications: IAlarmData[], waters: IAlarmData[], dialysis: IAlarmData[]},
    navigate: (path: string, options: { state: { alarm: IAlarmData } }) => void
) {
    const now = new Date();
    const currentTime = format(now, 'h:mm a');
    const currentDate = format(now, 'd/M/yyyy');


    const mergedAlarms: IAlarmData[] = [
        ...alarmData.medications.map((item:IAlarmData) => ({ ...item, type: "Medicine" })),
        ...alarmData.waters.map((item:IAlarmData) => ({ ...item, type: "Water" })),
        ...alarmData.dialysis.map((item:IAlarmData) => ({ ...item, type: "xRay" })),
    ];



    mergedAlarms.forEach(alarm => {
        if (alarm.type === "Medicine") {
            const medicineReminderTimes = medicineAlarmHandler(alarm.dose_count ?? 1,alarm.period?? '',alarm.time?? '');
            const shouldTrigger = medicineReminderTimes.some(alarmTime => alarmTime === currentTime);
            if (shouldTrigger && alarm.period === currentDate)
            {
                console.log('trigger');
                navigate('/m/reminder', { state: { alarm } });
            }
        } else if (alarm.type === "Water") {
            const waterReminderTimes = waterAlarmHandler(alarm.wake_up_time?? '',alarm.sleep_time?? '',alarm.reminder_every?? '');
            const shouldTrigger = waterReminderTimes.some(alarmTime => alarmTime === currentTime);
            if(shouldTrigger)
            {
                console.log('trigger');
                navigate('/m/reminder', { state: { alarm } });
            }
        } else if (alarm.type === "xRay") {
            const xRayReminderTimes = xRayAlarmHandler(alarm.sessions_per_week?? 1,alarm.start_date?? '',alarm.session_time?? '');
            const shouldTrigger = xRayReminderTimes.some(time => time === currentTime);
            console.log(alarm.session_time);
                console.log({
                currentTime,
                reminderTimes: xRayReminderTimes,
                match: xRayReminderTimes.includes(currentTime)
            });
            if(shouldTrigger)
            {
                console.log('trigger');
                navigate('/m/reminder', { state: { alarm } });
            }
        }
    });
}




// ** Handlers
const waterAlarmHandler = (wake_up_time:string, sleep_time:string, reminder_every:string) =>{
    if (!wake_up_time.trim() || !sleep_time.trim() || !reminder_every.trim()) return [];
    const reminders: string[] = [];
    const [startHour, startMinute] = wake_up_time.split(":").map(Number);
    const [endHour, endMinute] = sleep_time.split(":").map(Number);
    const now = new Date()
    let current = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHour, startMinute);
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endHour, endMinute);
    while (current <= end) {
        reminders.push(format(current, "h:mm a"));
        current = new Date(current.getTime() + parseInt(reminder_every) * 60 * 60 * 1000);
    }
    return reminders;
}

const medicineAlarmHandler = (dose_count:number, period:string, time:string)=>{
    if (!dose_count || !period.trim() || !time.trim()) return [];
    const reminders: string[] = [];
    const [startHour, startMinute] = time.split(":").map(Number);
    const now = new Date();
    let current = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHour, startMinute);
    const intervalHours = 24 / dose_count;

    for (let i = 0; i < dose_count; i++) {
        reminders.push(format(current, 'h:mm a'));
        current = new Date(current.getTime() + intervalHours * 60 * 60 * 1000);
    }
    return reminders;
}

const xRayAlarmHandler = (sessions_per_week:number,start_date:string,session_time:string)=>{
    const now = new Date();
    const [year, month, day] = start_date.split('-').map(Number);
    const [hour, minute] = session_time.split(':').map(Number);
    const start = new Date(year, month - 1, day, hour, minute);
    const result: string[] = [];
    if (now < start) return []; 

    const daysBetweenSessions = Math.floor(7 / sessions_per_week);
    const msBetweenSessions = daysBetweenSessions * 24 * 60 * 60 * 1000;

    let sessionDate = new Date(start);
    while (sessionDate <= now) {
        sessionDate = new Date(sessionDate.getTime() + msBetweenSessions);
    }

    sessionDate = new Date(sessionDate.getTime() - msBetweenSessions);

    const sessionTimeFormatted = format(sessionDate, "h:mm a");
    const nowFormattedDate = format(now, "d/M/yyyy");
    const sessionDateFormatted = format(sessionDate, "d/M/yyyy");

    if (nowFormattedDate === sessionDateFormatted) {
        result.push(sessionTimeFormatted);
    }

    return result;
};