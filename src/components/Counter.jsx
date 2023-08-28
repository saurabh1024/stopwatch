import Controller from "./Controller"


const Counter = () => {
  return (
    <div className="border-4 text-slate-700 h-32 rounded py-4 my-4">
        <div className="flex justify-center">
            <div className="px-4">
                <input className="focus:border-none active:border-none text-6xl w-20" type="text" placeholder="00" />
            </div>
            <div className="text-6xl pt-1">:</div>
            <div className="px-4">
                <input className="focus:border-none text-6xl w-20" type="text" placeholder="00" />
            </div>
            <div className="text-6xl pt-1">:</div>
            <div className="px-4">
                <input className="focus:border-none text-6xl w-20" type="text" placeholder="00" />
            </div>
        </div>
    </div>
  )
}

export default Counter