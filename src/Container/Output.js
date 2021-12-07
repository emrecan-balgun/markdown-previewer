import { useState } from 'react'
import Header from './Header'
import ReactMarkDown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
                components={{
                    code({node, inline, className, children, ...props}) {
                      const match = /language-(\w+)/.exec(className || '')
                      return !inline && match ? (
                        <SyntaxHighlighter
                          children={String(children).replace(/\n$/, '')}
                          style={docco}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      )
                    }
                  }}
            />
        </div>
        </>
    )
}

export default Output
