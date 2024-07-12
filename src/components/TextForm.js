import React, { useState } from 'react'
import '../App.css'

function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearClick = () => {
        let newText = "";
        setText(newText);
    }
    const handleCapitalizeClick = () => {
        let newText = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(newText);
    };
    const handleSentenceClick = () => {
        let newText = text
            .toLowerCase()
            .split('. ')
            .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
            .join('. ');
        setText(newText);
    };
    const handleRemoveExtraClick = () => {
        let newText = text
            .trim()
            .replace(/\s+/g, ' ');
        setText(newText);
    };
    const handleCopyText = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    };

    const handleOnChange = (event) => {
        setText(event.target.value); //
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="mb-3 mt-5 " >
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Enter The Text</b></label>
                <textarea placeholder="Enter Your Text" className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3" ></textarea>

            </div>
            <div className="col-auto">
                <button type="submit" onClick={handleUpClick} className="btn btn-primary btn-sm mx-2 mt-2  mb-2">Upper case</button>
                <button type="submit" onClick={handleLoClick} className="btn btn-secondary btn-sm mx-2 mt-2  mb-2">Lover case</button>
                <button type="submit" onClick={handleSentenceClick} className="btn btn-primary btn-sm mx-2 mt-2  mb-2">Sentence case</button>
                <button type="submit" onClick={handleCapitalizeClick} className="btn btn-secondary btn-sm mx-2 mt-2  mb-2">Capitalized case</button>
                <button type="submit" onClick={handleRemoveExtraClick} className="btn btn-primary btn-sm mx-2 mt-2  mb-2">Remove Extra Spaces</button>
                <button type="submit" onClick={handleCopyText} className="btn btn-secondary btn-sm mx-2 mt-2  mb-2">Copy Text</button>
                <button type="submit" onClick={handleclearClick} className="btn btn-danger btn-sm  mx-2 mt-2 mb-2">X</button>
            </div>
            <div className="summery container my-3">
                <h3>Your Text Summery</h3>
                <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
            </div>
        </>
    )
}

export default TextForm
