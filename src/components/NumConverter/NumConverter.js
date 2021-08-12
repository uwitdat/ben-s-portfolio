import { useState } from "react";
import { ones, tens, hundreds, thousands } from './convert'
import './NumConverter.css'

const NumConverter = () => {
    const [userInput, setUserInput] = useState("");
    const [result, setResult] = useState("");

    const inititliazer = (input) => {
        if (input.length === 1) {
            setResult(ones(Number(input)));
        } else if (input.length === 2) {
            const a = Number(input[0]);
            const b = Number(input[1]);
            setResult(tens(a, b));
        } else if (input.length === 3) {
            const a = Number(input[0]);
            const b = Number(input[1]);
            const c = Number(input[2]);
            setResult(hundreds(a, b, c));
        } else if (input.length === 4) {
            const a = Number(input[0]);
            const b = Number(input[1]);
            const c = Number(input[2]);
            const d = Number(input[3]);
            setResult(thousands(a, b, c, d));
        }
    };

    const handleOnChange = (e) => {
        setUserInput(e.target.value);
        if (e.target.value === "") {
            setResult("");
        } else if (e.target.value === "0") {
            setResult("zero");
        } else if (e.target.value.length >= 2 && e.target.value[0] === "0") {
            setResult("err: invalid input");
        } else if (isNaN(e.target.value)) {
            setResult("err: input must be an int");
        } else {
            parseInt(e.target.value, 0) > 9999 || parseInt(e.target.value, 0) < 0
                ? setResult("err: input value is out of range")
                : inititliazer(e.target.value);
        }
    };

    return (
        <div className='container-five-term'>
            <div className='title-holder'>
                <h1 className="title" id="black">NUMBER TO WORDS CONVERTER</h1>
            </div>
            <div className="container-for-term">
                <input
                    type="text"
                    autoFocus={true}
                    onBlur={({ target }) => target.focus()}
                    className="input"
                    value={userInput}
                    onChange={handleOnChange}
                    name="input-user"
                />
                <h4 className="term-title">MY_TERMINAL</h4>
                <div className="terminal">
                    <p className="top">
                        ~/dev/num-convert <span className="main">@main</span>
                    </p>
                    <div className="bottom-container">
                        <p className="bottom">
                            enter a number between 0-9999:
                            {userInput !== "" ? (
                                <span className="blink hidden">&#10073;</span>
                            ) : (
                                <span className="blink">&#10073;</span>
                            )}
                            <span className="user-input">{userInput}</span>
                        </p>
                    </div>
                </div>

                <div className="result-div">
                    {userInput !== "" ? <span className="ticker">&rsaquo;</span> : null}
                    <span className={result.includes("err") ? "result err" : "result"}>
                        {" "}
                        {result}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NumConverter;