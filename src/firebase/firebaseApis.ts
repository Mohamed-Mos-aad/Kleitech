import { updatePassword } from 'firebase/auth';
import { auth } from './firebase-config';

export const changeFirebasePassword = async (newPassword: string) => {
    const user = auth.currentUser;
    if (user) {
        try {
        await updatePassword(user, newPassword);
        console.log('✅ Password updated in Firebase');
        } catch (error) {
        console.error('❌ Error updating password in Firebase:', error);
        }
    } else {
        console.warn('❌ No authenticated user in Firebase');
    }
};