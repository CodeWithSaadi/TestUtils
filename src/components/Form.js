//React Tut 7 =  Understanding State & Handling Events in React 

import React, { useState } from 'react'             //  imr    =  import react

export default function Form(props) {               //  rfc    = react functional based copmponent


    const [text, setText] = useState('');           //TEXT STATE (copy from React Doc.. )

    const handleUpClick = () => {
        let newText = text.toUpperCase()                          // function of change text to UPPER CASE
        setText(newText);
        props.showAlert("Text converted to UPPERCASE", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()                          // function of change text to lover CASE
        setText(newText);
        props.showAlert("Text converted to lowercase", "success");        //Alert props from App
    }

    const handleClearClick = () => {
        let newText = "";                                        // function of clear texrt
        setText(newText);
        props.showAlert("Text cleared", "success");
    }


    function handleCopyClick() {                                 // function of copy text
        /* Get the text field */
        var copyText = document.getElementById("myBox");

        /* Select the text field */
        copyText.select();


        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

        /* Alert the copied text */
        props.showAlert("Text Copied", "success")
        // remove selected text
        document.getSelection().removeAllRanges();
    }


    const handleExtraSpaces = () => {                            // Remove Extra Spaces
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success")
    }



    const handleUpChange = (event,) => {


        setText(event.target.value);                            // On-Change + add typed test (event).  (listen " value={text} " + curent type)  ====== onChange={handleUpChange}

    }

    return (
        <>
            <div>

                <div className="mb-3 container">
                    <label className="form-label"><h1>{props.heading}</h1> </label>
                    <textarea className="form-control" id="myBox" onChange={handleUpChange} value={text} rows={8} placeholder="Enter Text Here" />

                </div>


                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="contaner my-3">
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} chracters</p>   {/* Count lenth of Words and Chracters ---  {split("_").lentgh} is use to count word enter in ("_")  and  {text.length} is use to count lenth of chracters*/}

                <h4 > Time too read</h4>
                <p>{0.008 * text.split("").length} minutes</p>   {/* Time to read in minutes  */}
                <h4>Preview</h4>
                <p>{text}</p>                                    {/*  setTExt variable "{text}" can be use anywhere */}
            </div>
        </>)
}
