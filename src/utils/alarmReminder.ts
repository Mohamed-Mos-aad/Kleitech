// ** Hooks && Tools
import { format } from 'date-fns';
// ** Interfaces
import { IAlarmData } from '../interfaces';

export function checkAndRedirectReminder(
    alarmData: IAlarmData[],
    navigate: (path: string, options: { state: { alarm: IAlarmData } }) => void
) {
    const now = new Date();
    const currentTime = format(now, 'h aaaa');
    const currentDate = format(now, 'd/M/yyyy');

    alarmData.forEach(alarm => {
        if (alarm.type === "Medicine") {
            if (alarm.period === currentTime && alarm.time === currentDate) {
                navigate('/reminder', { state: { alarm } });
            }
        } else if (alarm.type === "Water") {
            if (alarm.wake_up_time === currentTime) {
                navigate('/reminder', { state: { alarm } });
            }
        } else if (alarm.type === "xRay") {
            if (alarm.session_time === currentTime && alarm.start_date === currentDate) {
                navigate('/reminder', { state: { alarm } });
            }
        }
    });
}
