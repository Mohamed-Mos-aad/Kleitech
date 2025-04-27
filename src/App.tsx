import { useEffect } from 'react';
import './App.css'
import Routers from './routers'
import { useDispatch } from 'react-redux';
import { AppDispatch } from './app/store';
import { setUserLogin } from './app/slices/userSlice';

function App() {
  // ** Store
  const dispatch: AppDispatch = useDispatch();


  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('kleitech_user') || sessionStorage.getItem('kleitech_user') || 'null');
    if (userData) {
      dispatch(setUserLogin({ ...userData.user, token: userData.token, loggedIn: true }));
    }
  }, [dispatch]);

  return (
    <>
      <Routers />
    </>
  )
}

export default App
