import { VFC } from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Legend, YAxis, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: '2013年', User: 4000, PV: 2400,
  },
  {
    name: '2014年', User: 3000, PV: 1398,
  },
  {
    name: '2015年', User: 2000, PV: 9800,
  },
  {
    name: '2016年', User: 2780, PV: 3908,
  },
  {
    name: '2017年', User: 1890, PV: 4800,
  },
  {
    name: '2018年', User: 2390, PV: 3800,
  },
  {
    name: '2019年', User: 3490, PV: 4300,
  },
  {
    name: '2020年', User: 5700, PV: 6300,
  },
  {
    name: '2021年', User: 6920, PV: 6800,
  },
];

const Graph: VFC = () => {
  return (
    <div className="max-w-xs md:max-w-5xl py-5 md:px-8 md:py-10 mx-auto">
      <div className="flex justify-center rounded-2xl bg-base-100 shadow-md text-xs py-2 md:text-sm md:py-5 md:px-5">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={900}
            height={400}
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval="preserveStartEnd" />
            <YAxis interval="preserveStartEnd" />
            <Legend />
            <Line type="natural" dataKey="User" stroke="#8884d8" strokeWidth={3} animationDuration={1000} />
            <Line type="monotone" dataKey="PV" stroke="#82ca9d" strokeWidth={3} animationDuration={1000} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Graph
