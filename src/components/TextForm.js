import React, { useState } from 'react'
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineBackspace } from "react-icons/md";
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
    const handleClearClick = () => {
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
        const textArea = document.getElementById("exampleFormControlTextarea1");
        textArea.select();
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textArea.value)
                .then(() => {
                    console.log('Text copied to clipboard');
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        } else {
            console.error('Clipboard API not available');
            // Fallback for browsers that do not support the Clipboard API
            document.execCommand('copy');
        }
    };

    const handleOnChange = (event) => {
        setText(event.target.value); //
    }
    const [text, setText] = useState('');
    const countWords = (text) => {
        return text.trim().split(/\s+/).filter(word => word.length !== 0).length;
    };
    return (
        <>
            <div className="mb-1 mt-2">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><b className='WordCount'>Enter The Text</b></label>
                <textarea placeholder="Enter Your Text" className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="col-auto">
                <button type="button" onClick={handleUpClick} className="btn mx-1 mt-2 ">Upper case</button>
                <button type="button" onClick={handleLoClick} className="btn mx-1 mt-2 ">Lower case</button>
                <button type="button" onClick={handleSentenceClick} className="btn mx-1 mt-2 ">Sentence case</button>
                <button type="button" onClick={handleCapitalizeClick} className="btn mx-1 mt-2 ">Capitalized case</button>
                <button type="button" onClick={handleRemoveExtraClick} className="btn  mx-1 mt-2 ">Remove Extra Spaces</button>

                <div className="last-two-btns mt-2">
                    <button type="button" onClick={handleCopyText} className="btn mx-1 icon"><IoCopyOutline /></button>
                    <button type="button" onClick={handleClearClick} className="btn mx-1 icon RED"><MdOutlineBackspace /></button>
                </div>
            </div>
            <div className="summary container my-1">
                <h3>Your Text Summary</h3>
                <p><b className='WordCount'>{countWords(text)}</b> words and <b className='WordCount'>{text.length}</b> characters</p>
            </div>
        </>
    )
}

export default TextForm
