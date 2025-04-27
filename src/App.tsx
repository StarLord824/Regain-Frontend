import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>I will show up user data here</p>
    </div>
  )
}

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Hackathon Project</h1>
      <p>This is the landing page</p>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <Link to="/login">
        <p>Already have an account? Login here</p>
        <button>Login</button>
      </Link>
    </div>
  )
}
export default App
