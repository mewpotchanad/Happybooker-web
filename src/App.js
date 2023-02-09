import { ToastContainer } from 'react-toastify'
import Router from "../src/routes/Router"

function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose="1000" theme="light" position="bottom-center" />
    </>
  );
}

export default App;
