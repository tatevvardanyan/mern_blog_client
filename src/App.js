import './App.css';
import { UserContextProvider } from './UserContext';
import MyRouter from './router';

function App() {
  return (
    <UserContextProvider>
      <MyRouter />
    </UserContextProvider>
  );
}

export default App;
