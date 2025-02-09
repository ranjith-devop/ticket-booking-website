import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <h1 className="text-center text-success">Welcome to Bus Ticket Booking</h1>
      </div>
    </div>
  );
}

export default App;
