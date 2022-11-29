import { TfiAlarmClock } from "react-icons/tfi"

import Timer, { TimeType } from "./components/Timer";
import { useState } from "react";
import Loop from "./components/Loop";

function App() {
  const [loop, setLoop] = useState<TimeType[]>([]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#2e3338]">
      <div className="h-[615px] w-[380px] shadow-box rounded-xl opacity-90 bg-[#262931] px-10 py-5
                      text-white flex justify-evenly flex-col">
        <div className=" flex justify-center">
          <TfiAlarmClock size={200} />
        </div>
        <Timer setLoop={(setLoop)} />
        <div className="h-[150px] overflow-y-scroll no-scrollbar">
          {loop?.map((item, index) => <Loop key={index} index={index + 1} item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
