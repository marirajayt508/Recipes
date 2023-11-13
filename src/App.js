import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from "./redux/store";
import Food from "./components/foodMenu";

function App() {
  return (
<Provider store={store}>
<Food/>
<ToastContainer />
</Provider> 
 );
}

export default App;
