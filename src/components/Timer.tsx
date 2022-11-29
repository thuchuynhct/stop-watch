import React, { useEffect, useRef, useState } from 'react'
import { MdOutlinePause, MdTimelapse } from "react-icons/md"
import { AiOutlineUndo } from "react-icons/ai"
import { BsCaretRightFill } from "react-icons/bs"
import Button from "./Button";

export type TimeType = {
    minute: number,
    second: number,
    milliSecond: number
}
export function formatNumber(number: number): string {
    return number < 10 ? "0" + number.toString() : number.toString();
}
function Timer({ setLoop }: { setLoop: React.Dispatch<React.SetStateAction<TimeType[]>> }) {
    const [isRun, setIsRun] = useState<boolean>(false);
    const [time, setTime] = useState<TimeType>({ minute: 0, second: 0, milliSecond: 0 });
    let id = useRef<NodeJS.Timer>();

    const onRun = () => setIsRun(!isRun);

    const onReset = () => {
        setTime({ minute: 0, second: 0, milliSecond: 0 })
        setLoop([] as TimeType[]);
    }
    const onLap = () => {
        setLoop(prev => [...prev, time]);
    }

    function stopWatchHandle(): void {
        const newTime: TimeType = JSON.parse(JSON.stringify(time));

        newTime.milliSecond = newTime.milliSecond + 10;
        if (newTime.milliSecond === 90) {
            newTime.second++;
            newTime.milliSecond = 0;
        }
        if (newTime.second === 59) {
            newTime.minute++;
            newTime.second = 0;
        }
        setTime(newTime);
    }
    useEffect(() => {
        if (isRun)
            id.current = setInterval(() => stopWatchHandle(), 100)
        else
            clearInterval(id.current);

        return () => clearInterval(id.current);
    })

    return (
        <div>
            <div>
                <h3 className="text-[#f69514] text-xl font-semibold ml-6">Set timer</h3>
                <div className='flex justify-center items-start gap-x-3'>
                    <h4 className="block w-[200px] text-[5rem] font-semibold text-left leading-[70px]
                           transition-all ease-linear">{`${formatNumber(time.minute)}:${formatNumber(time.second)}`}
                    </h4>
                    <h5 className="pt-3 text-[3rem]">{formatNumber(time.milliSecond)}</h5>
                </div>
            </div>
            <div className="text-[1.5rem]
                            flex justify-center items-center gap-x-12">
                <Button onClick={onReset} Icon={AiOutlineUndo} />
                <Button onClick={onRun} Icon={isRun ? MdOutlinePause : BsCaretRightFill} className="p-3 bg-[#f69514] rounded-full" />
                <Button onClick={onLap} Icon={MdTimelapse} />
            </div>
        </div>
    )
}

export default Timer
