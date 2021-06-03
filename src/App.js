import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {

    const sentences = ["A big fish in a little pond.", "A barking dog never bites.", "A good medicine tastes bitter.", "동해물과 백두산이 마르고 닳도록"];
    const [sentence, setSentence] = useState(sentences[0]); // 문장 한개
    const [speed, setSpeed] = useState(0); // 타자 속도
    const [idx, setIdx] = useState(0); // 문장 배열 인덱시
    const [accuracy, setAccuracy] = useState(null); // 정확도
    const [seconds, setSeconds] = useState(0); // 시간 카운트

    const checkWrongChar = (e) => {
        const { value } = e.target;
        // if (value === sentence) {
        //     console.log("TRUE");
        // }
        // else {
        //     console.log("FALSE");
        // }
    }

    const handleKeyPress = (e) => {
        console.log("enter");
        if (e.key === "Enter") {
            if (idx === sentences.length - 1) {
                setIdx(0);
            }
            else {
                setIdx(idx + 1);
            }
        }
    }

    useEffect(() => {
        const inputBox = document.getElementById('inputBox');
        const sentenceLength = sentence.length;
        let wrongCnt = 0;
        for (let i = 0; i < sentenceLength; i++) {
            if (sentence[i] !== inputBox.value[i] || inputBox.value[i] === 'undefined') wrongCnt++;
        }
        const accuracy = ((sentenceLength - wrongCnt) * 100 / sentenceLength).toFixed(2);
        setSentence(sentences[idx]);
        setAccuracy(accuracy);
    }, [idx])

    useEffect(() => {
        const inputBox = document.getElementById('inputBox');
        inputBox.value = "";
    }, [sentence])

    return (
        <div className="App">
            <p/>
            <input type="text" value={sentence} style={{ width: "500px" }}/>
            <p/>
            <input id="inputBox" type="text" style={{ width: "500px" }}
                   maxLength={sentence.length}
                   onChange={(e) => checkWrongChar(e)}
                   onKeyPress={(e) => handleKeyPress(e)}
            />
            <p>Accuracy : {accuracy}%</p>
            <p>Speed : {speed}</p>

            {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
        </div>
    );
}

export default App;
