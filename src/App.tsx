import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Layout/Navbar/navbar'

const App = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0)
	const [openDropdown, setOpenDropdown] = useState<number | null>(null)
	const navigate = useNavigate()

	const menuItems = [
		{ label: 'Bosh sahifa', path: '/' },
		{
			label: 'Yozuvlar',
			path: '/',
			children: [
				{ label: 'Barcha yozuvlar', path: '/writing' },
				{ label: 'Maqolalar', path: '/' },
				{ label: 'Kitoblar', path: '/' },
			],
		},
		{
			label: 'Videolar',
			path: '/',
			children: [
				{ label: 'YouTube', path: '/' },
				{ label: 'Reels', path: '/' },
				{ label: 'Shorts', path: '/' },
			],
		},
		{ label: 'Biz haqimizda', path: '/' },
		{ label: 'Aniqlik', path: '/' },
	]

	const handleNavigate = (index: number, path: string) => {
		setActiveIndex(index)
		navigate(path)
	}

	const toggleDropdown = (index: number) => {
		setOpenDropdown(openDropdown === index ? null : index)
	}

	return (
		<div className='flex flex-col items-center dark:bg-red-400 bg-white'>
			<Navbar />
			<div className='w-full h-[90vh] do-sans col-span-1 flex '>
				<div className='w-[240px] h-full border-r p-5 flex flex-col items-center justify-between'>
					<div className='flex flex-col items-center justify-between w-full'>
						<div className='menu w-full'>
							<ul className='flex text-[16px] w-full font-[500] gap-2 flex-col items-start justify-center duration-200'>
								{menuItems.map((item, index) => (
									<div key={index} className='w-full'>
										<li
											onClick={() => {
												handleNavigate(index, item.path)
												if (item.children) toggleDropdown(index)
											}}
											className={`w-full h-[40px] px-3 flex justify-between items-center rounded-xl cursor-pointer transition-all duration-200 ${
												activeIndex === index
													? 'bg-blue-500 text-white'
													: 'bg-gray-100 hover:bg-blue-100'
											}`}
										>
											<span>{item.label}</span>
											{item.children &&
												(openDropdown === index ? (
													<FaChevronUp className='text-xs' />
												) : (
													<FaChevronDown className='text-xs' />
												))}
										</li>

										{/* Dropdown submenu */}
										{item.children && openDropdown === index && (
											<ul className='ml-3 mt-1 flex flex-col gap-1'>
												{item.children.map((sub, subIndex) => (
													<li
														key={subIndex}
														onClick={() => navigate(sub.path)}
														className='text-sm px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-100 text-gray-700 transition duration-200'
													>
														{sub.label}
													</li>
												))}
											</ul>
										)}
									</div>
								))}
							</ul>
						</div>
					</div>

					<div className='imoje w-full h-[200px] border-2'></div>
				</div>
				<div className='h-full w-full p-2'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default App
