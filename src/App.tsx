import { useState } from 'react'
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './Layout/Navbar/navbar'

const App = () => {
	const [openDropdown, setOpenDropdown] = useState<number | null>(null)
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

	const navigate = useNavigate()
	const location = useLocation()
	// const authDek = () => {
	// 	const auth = localStorage.getItem('token')
	// 	if (!auth) {
	// 		navigate('/register')
	// 	}
	// }

	const menuItems = [
		{ label: 'Bosh sahifa', path: '/' },
		{
			label: 'Yozuvlar',
			path: '/writing',
			children: [
				{ label: 'Barcha yozuvlar', path: '/writing' },
				{ label: 'Maqolalar', path: '/articles' },
				{ label: 'Kitoblar', path: '/books' },
			],
		},
		{
			label: 'Videolar',
			path: '/videos',
			children: [
				{ label: 'YouTube', path: '/videos/youtube' },
				{ label: 'Reels', path: '/videos/reels' },
				{ label: 'Shorts', path: '/videos/shorts' },
			],
		},
		{ label: 'Biz haqimizda', path: '/about' },
		{ label: 'Aniqlik', path: '/contact' },
	]

	const toggleDropdown = (index: number) => {
		setOpenDropdown(openDropdown === index ? null : index)
	}
	// useEffect(() => {
	// 	authDek()
	// }, [])

	return (
		<div className='flex flex-col dark:bg-neutral-900 bg-white min-h-screen'>
			<Navbar />

			{/* Mobil menyu tugmasi */}
			<div className='md:hidden p-3 flex items-center justify-between border-b'>
				<button onClick={() => setSidebarOpen(!sidebarOpen)}>
					{sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
				</button>
			</div>

			<div className='flex flex-1'>
				{/* Sidebar */}
				<div
					className={`$ {
						sidebarOpen ? 'block' : 'hidden'
					} md:block w-[240px] h-full border-r p-5 transition-all duration-300 fixed md:static bg-white z-50 dark:bg-neutral-900`}
				>
					<ul className='text-[16px] font-[500] gap-2 flex flex-col'>
						{menuItems.map((item, index) => {
							const isActive =
								item.path === location.pathname ||
								item.children?.some(sub => sub.path === location.pathname)
							return (
								<div key={index} className='w-full'>
									<li
										onClick={() => {
											navigate(item.path)
											if (item.children) toggleDropdown(index)
											if (window.innerWidth < 768) setSidebarOpen(false)
										}}
										className={`w-full h-[40px] px-3 flex justify-between items-center rounded-xl cursor-pointer transition-all duration-200 ${
											isActive
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

									{item.children && openDropdown === index && (
										<ul className='ml-3 mt-1 flex flex-col gap-1'>
											{item.children.map((sub, subIndex) => (
												<li
													key={subIndex}
													onClick={() => {
														navigate(sub.path)
														setSidebarOpen(false)
													}}
													className={`text-sm px-3 py-2 rounded-lg cursor-pointer transition duration-200 ${
														location.pathname === sub.path
															? 'bg-blue-500 text-white'
															: 'hover:bg-blue-100 text-gray-700'
													}`}
												>
													{sub.label}
												</li>
											))}
										</ul>
									)}
								</div>
							)
						})}
					</ul>

					<div className='imoje w-full h-[100px] border mt-6'></div>
				</div>

				{/* Outlet */}
				<div className='flex-1 p-3 md:ml-[0px]'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default App
