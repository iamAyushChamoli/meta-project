import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Arena from "./Game"
import Nav from "./components/Nav"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import PostLogin from "./components/PostLogin"
import User from "./components/User"
import Space from "./components/Space"

function App() {

  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="/dashboard" element={<PostLogin />} />
        <Route path='/user' element={<User />} />
        <Route path='/space' element={<Space />} />
        <Route path="/arena" element={<Arena />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
