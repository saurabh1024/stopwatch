import { useEffect, useState } from "react"
import Controller from "./Controller"
const MAX_HOURS = 24
const MAX_MINS = 60
const MAX_SEC = 60
const Counter = () => {
    const [input, setInput] = useState({hours:"", mins:"", sec:""})
    const [isStarted, setIsStarted] = useState(false)
    const appendZero = (param) => {
        let value = parseInt(param)
        if(value>=10){
            return value
        } else {
            return `0${value}`
        }
    }
    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        if(value <= 60)
            setInput({...input,[e.target.name]:value})
        else if(name === "sec"){
            let sec_ = value % 60
            let mins_ = parseInt(value/60) + parseInt(input.mins)
            mins_ = appendZero(mins_)
            setInput({...input,mins:mins_,sec:sec_})
        }
        else if(name === "mins"){
            let mins_ = value % 60
            let hours_ = parseInt(value/60) + parseInt(input.hours)
            hours_ = appendZero(hours_)
            setInput({...input,mins:mins_,hours:hours_})
        }
    }
    const handleReset = () => {
        setIsStarted(false)
        setInput({hours:"", mins:"", sec:""})
    }
    const handleStart = () => {
       setIsStarted(!isStarted)
    }
    useEffect(()=>{
        if(isStarted){
            if(parseInt(input.sec)>0){
                setTimeout(()=>{
                let sec_ = appendZero(--input.sec)
                let newInput = {...input, sec:sec_}
                setInput(newInput)
                }, 10)
            } else if(parseInt(input.mins)>0){
                let mins_ = appendZero(--input.mins) 
                let newInput = {...input, mins:mins_, sec:60}
                setInput(newInput)
            } else if(parseInt(input.hours)>0){
                let hours_ = appendZero(--input.hours) 
                let newInput = {...input, hours:hours_, mins:60}
                setInput(newInput)
            } 
        }
    },[{...input}])
  return (
    <div>
        <div className="border-4 text-slate-700 h-32 rounded py-4 my-4">
            <div className="flex justify-center">
                <div className="px-4">
                    <input onChange={handleChange} value={input.hours} name="hours" className="focus:outline-none text-6xl w-20" type="text" placeholder="00" maxLength={2} />
                </div>
                <div className="text-6xl pt-1">:</div>
                <div className="px-4">
                    <input onChange={handleChange} value={input.mins} name="mins" className="focus:outline-none text-6xl w-20" type="text" placeholder="00" maxLength={2} />
                </div>
                <div className="text-6xl pt-1">:</div>
                <div className="px-4">
                    <input onChange={handleChange} value={input.sec} name="sec" className="focus:outline-none text-6xl w-20" type="text" placeholder="00" maxLength={2} />
                </div>
            </div>
        </div>
        <Controller isStarted={isStarted} handleReset={handleReset} handleStart={handleStart} />
    </div>
  )
}

export default Counter