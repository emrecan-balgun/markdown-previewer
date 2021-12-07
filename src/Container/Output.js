import { useState } from 'react'
import Header from './Header'
import ReactMarkDown from 'react-markdown';

function Output() {
    const [input, setInput] = useState();

    return (
        <>
        <Header />
        <div className="output">
            <textarea 
                className="output__box" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <ReactMarkDown 
                className="output__box" 
                children={input} 
            />
        </div>
        </>
    )
}

export default Output
