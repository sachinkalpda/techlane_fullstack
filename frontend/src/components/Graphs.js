import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";

export default function Graphs() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData([
            {
                name: 'Page A',
                uv: 4000,
                pv: 2400,
                amt: 2400,
            },
            {
                name: 'Page B',
                uv: 3000,
                pv: 1398,
                amt: 2210,
            },
            {
                name: 'Page C',
                uv: 2000,
                pv: 9800,
                amt: 2290,
            },
            {
                name: 'Page D',
                uv: 2780,
                pv: 3908,
                amt: 2000,
            },
            {
                name: 'Page E',
                uv: 1890,
                pv: 4800,
                amt: 2181,
            },
            {
                name: 'Page F',
                uv: 2390,
                pv: 3800,
                amt: 2500,
            },
            {
                name: 'Page G',
                uv: 3490,
                pv: 4300,
                amt: 2100,
            },
        ]
        )
    }, [])
    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <div className="w-full mt-3 flex-1 text-xs">
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}