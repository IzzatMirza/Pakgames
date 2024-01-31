import { ToastContainer } from 'react-toastify';
import './App.scss';
import Routes from './pages/Routes';
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <>


      <Routes />

      <ToastContainer
      
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      >

      </ToastContainer>
    </>
  );
}

export default App;
