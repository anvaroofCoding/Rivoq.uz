import { useState } from 'react'
import {
	Bar,
	BarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'
import { Card } from '../components/ui/card'
import { cn } from '../lib/utils'

const data = [
	{ name: 'Yan', uv: 400 },
	{ name: 'Fev', uv: 300 },
	{ name: 'Mar', uv: 500 },
	{ name: 'Apr', uv: 200 },
	{ name: 'May', uv: 600 },
	{ name: 'Iyun', uv: 350 },
]

// Status tiplarini aniqlaymiz (shunda TypeScript xato bermaydi)
type StatusType = 'success' | 'warning' | 'danger' | 'info'

const statusColors: Record<StatusType, string> = {
	success: 'bg-green-500',
	warning: 'bg-yellow-500',
	danger: 'bg-red-500',
	info: 'bg-blue-500',
}

interface StatItem {
	title: string
	value: number
	status: StatusType
}

const DashboardStats = () => {
	const [stats] = useState<StatItem[]>([
		{ title: 'Foydalanuvchilar', value: 1240, status: 'success' },
		{ title: 'Sotuvlar', value: 894, status: 'info' },
		{ title: 'Xatoliklar', value: 37, status: 'danger' },
		{ title: 'Buyurtmalar', value: 219, status: 'warning' },
	])

	return (
		<div className='p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
			{stats.map((item, idx) => (
				<Card
					key={idx}
					className={cn(
						'p-5 rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.03] text-white',
						statusColors[item.status]
					)}
				>
					<p className='text-sm font-semibold opacity-80'>{item.title}</p>
					<h3 className='text-2xl font-bold mt-2 animate-pulse'>
						{item.value}
					</h3>
				</Card>
			))}

			<div className='col-span-1 sm:col-span-2 lg:col-span-4'>
				<Card className='p-6'>
					<h3 className='text-lg font-semibold mb-4'>Oylik Faollik</h3>
					<ResponsiveContainer width='100%' height={200}>
						<BarChart data={data}>
							<XAxis dataKey='name' stroke='#8884d8' />
							<YAxis />
							<Tooltip />
							<Bar dataKey='uv' fill='#0ea5e9' radius={[4, 4, 0, 0]} />
						</BarChart>
					</ResponsiveContainer>
				</Card>
			</div>
		</div>
	)
}

export default DashboardStats
