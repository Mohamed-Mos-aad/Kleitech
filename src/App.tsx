// ** Style
import './App.css'
// ** Hooks && Tools
import { useEffect } from 'react';
import Routers from './routers'
import { useDispatch } from 'react-redux';
import { AppDispatch } from './app/store';
import { setUserLogin } from './app/slices/userSlice';
import MessagePop from './components/ui/MessagePop';

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
    <div className="app">
      <Routers />
      <MessagePop />
    </div>
    </>
  )
}

export default App