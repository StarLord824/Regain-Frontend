import { Link, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase'
import { useEffect, useState } from 'react'
import HomePage from './components/Home/HomePage'


function App() {
  // const [setUser] = useState<any>(null);
  // const navigate = useNavigate()

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       setUser(currentUser);  // User is authenticated
  //       navigate('/home');  // Redirect to home page if user is logged in
  //     } else {
  //       setUser(null);  // No user is logged in
  //       navigate('/');  // Stay on login page if user is not logged in
  //     }
  //   });

  //   return () => unsubscribe();  // Clean up the listener on component unmount
  // }, [navigate])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

const LandingPage = () => {
  return (
    <div>
      <Link to="/home">
        <button>Go to Home</button>
      </Link>
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
