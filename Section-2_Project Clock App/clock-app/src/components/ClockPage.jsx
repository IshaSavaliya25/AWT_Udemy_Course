import React, { useState , useEffect} from 'react'

const ClockPage = () => {

    const [hh, setHh] = useState(0)
    const [mm, setMm] = useState(0)
    const [ss, setSs] = useState(0)
    const [laps, setLaps] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
            let s = ss + 1;
            let m = Math.floor(s / 60) ;
            s = s % 60;
            let h = Math.floor(m / 60) ;
            m = m % 60;
            setSs(s);
            setMm(prev => prev + m);
            setHh(prev => prev + h);
        }, 1000)
        return () => clearTimeout(timer);
    }, [ss])

    const handleAdd = () => {
        setLaps((laps) => [`${hh}:${mm}:${ss}`, ...laps])
    }

  return(
    <div>
      <div style={{display : 'inline-block', margin: '10px'}}>{hh}</div>
      <div style={{display : 'inline-block', margin: '10px'}}>{mm}</div>
      <div style={{display : 'inline-block', margin: '10px'}}>{ss}</div>
      <button onClick={handleAdd}>Record</button>
      <h2>Records</h2>
      <ul type='none'>
        {laps.map((lap, index) => (
          <li key={index}>{lap}</li>
        ))}
      </ul>
    </div>  
  )
}

export default ClockPage


//usig react create stop watch