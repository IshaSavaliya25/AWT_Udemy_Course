import React, { useEffect } from 'react'

const TextRef = () => {

    const[input, setInput] = React.useState('');
    const inputRef = React.useRef(null);
    const countRef = React.useRef(0);
    useEffect(() => {
        console.log(inputRef.current.value);
        countRef.current = countRef.current + 1;
    })
    const hadleClick = () => {
        inputRef.current.focus();
    }
  return (
    <div>
        {}
      <input ref={inputRef} value={input} onChange = {(e) => setInput(e.target.value)} placeholder='Enter any value' />
      <input type="button" value="Submit" onClick={hadleClick}></input>
    </div>
  )
}

export default TextRef
