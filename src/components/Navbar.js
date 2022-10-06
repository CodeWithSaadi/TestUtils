import React from 'react'
// import { Link } from 'react-router-dom';

const Person = (props) => {



    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >                 {/*  Use JS in class */}
                {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark" > */}
                <div className="container-fluid">
                    <a href="/">
                        {props.title}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href='/'>
                                    {props.home}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href='/'>
                                    {props.about}
                                </a>
                            </li>

                        </ul>


                        {/*   Enable Dark Mode Using Radio Button */}
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>                        {/*  Use JS Conditions (if-else) in class  */}
                            <input onClick={props.toggleDark} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
                        </div>




                        <div class="form-chec form-check-inline ">
                            <input onClick={props.toggleColorDark} class={`form-check-input bg-dark mx-2`} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">Dark</label>
                        </div>
                        <div class="form-check form-check-inline ">
                            <input onClick={props.toggleColorDanger} class={`form-check-input bg-danger`} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">Danger</label>
                        </div>
                        <div class="form-check form-check-inline ">
                            <input onClick={props.toggleColorSuccess} class={`form-check-input bg-success`} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">Success</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input onClick={props.toggleColorInfo} class={`form-check-input bg-info`} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">Info</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input onClick={props.toggleColorLight} class={`form-check-input bg-light`} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">Light</label>
                        </div>




                    </div>
                </div>
            </nav>
        </>
    );
};
export default Person;
