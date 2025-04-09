import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export const CommitChart = ({ data }: { data: { day: string, commits: number }[] }) => {
  return (
    <div className="h-64 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="commits" stroke="#4f46e5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
