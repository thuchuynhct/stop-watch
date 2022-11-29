import { TimeType, formatNumber } from "./Timer"

function Loop({ index, item }: { index: number, item: TimeType }) {
  return (
    <div className='hover:text-[#f69514] font-medium flex justify-between'>
      <p>Vòng {index}</p>
      <p>{`${formatNumber(item.minute)}:${formatNumber(item.second)},${formatNumber(item.milliSecond)}`}</p>
    </div>
  )
}

export default Loop
