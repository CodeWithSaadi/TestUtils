
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";

import {                                      //import react-router-domain
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App(props) {

  //useStates-------------------
  const [mode, setMode] = useState('light');                                //wahtever Darkmode is Enabled or Disabples
  const [btnText, setbtnText] = useState("Enable White Mode")

  const [alert, setAlert] = useState(null)                                 // useState for Alert

  //Alert function-----------------
  const showAlert = (message, type) => {
    setAlert({                         //show mesage in alert
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  //DarkMode function--------------------
  const toggleDark = () => {
    if (mode === 'dark') {
      setMode('light')
      setbtnText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("The light mode has been active", "success")        //call alert in navbar dark/light

      document.title = 'Textutils -Light Mode'                  // Title
      //   setInterval(() => {
      //     document.title = 'Textutils -Light Mode'                  // Title - change with interval
      //   }, 2000);
    }
    else {
      setMode('dark')
      setbtnText("Disable Dark Mode");
      document.body.style.backgroundColor = '#101878'
      document.body.style.color = 'white'
      showAlert("The dark mode has been active", "success")

      document.title = 'Textutils - Dark Mode'                // Title
      // setInterval(() => {
      //   document.title = 'Textutils - Dark Mode'                // Title - change with interval
      // }, 1000);
    }
  }


  //----------------------------Color mode----------------------------------------------------
  const toggleColorDark = () => {
    setMode('dark')
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    showAlert("The Dark mode has been active", "success")
  }
  const toggleColorLight = () => {
    setMode('light')
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    showAlert("The Light mode has been active", "success")
  }
  const toggleColorDanger = () => {
    setMode('danger')
    document.body.style.backgroundColor = 'red'
    document.body.style.color = 'black'
    showAlert("The Danger mode has been active", "success")
  }
  const toggleColorSuccess = () => {
    setMode('success')
    document.body.style.backgroundColor = '#49be25'
    document.body.style.color = 'black'
    showAlert("The Success mode has been active", "success")
  }
  const toggleColorInfo = () => {
    setMode('info')
    document.body.style.backgroundColor = '#2587be'
    document.body.style.color = 'black'
    showAlert("The Info mode has been active", "success")
  }


  //Cpmponents-----------------------
  return (
    <>

      <Router>                              {/*   ""npm install react-router-dom --save ""   <Router> - <Routes> - <Route>      */}

        {/* <Link> to="/" is not working in Navbar so by using another method of prop I export <Link> from App.js to Navbar.js  */}

        <Navbar home={<Link to='/'><a className="nav-link " aria-current="page" href="/about">Home</a></Link>} title={<Link to='/'><a className="navbar-brand" aria-current="page" href="/about">TextUtils</a></Link>} about={<Link to='/about'><a className="nav-link " aria-current="page" href="/abou">About</a></Link>}
          mode={mode} btnText={btnText} toggleDark={toggleDark} toggleColorDark={toggleColorDark} toggleColorLight={toggleColorLight} toggleColorDanger={toggleColorDanger} toggleColorSuccess={toggleColorSuccess} toggleColorInfo={toggleColorInfo} />

        <Alert alert={alert} />



        <Routes>
          <Route path="/" element={<div className="container my-4">
            <Form heading=" This is TextForm" showAlert={showAlert} />
          </div>} />
          <Route exact path="/about" element={<About />} />
        </Routes>

      </Router>
    </>
  );
}

// export default ;
export default App;
