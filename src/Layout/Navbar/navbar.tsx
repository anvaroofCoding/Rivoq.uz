import { Button, message } from 'antd'
import { Link } from 'react-router-dom'
import rivoq from '../../assets/log/rivoq.png'
import { InputDemo } from '../../components/Input/inputDemo'

const Navbar = () => {
	// useEffect(() => {

	// 	seccessLogin()
	// }, [])
	const seccessLogin = () => {
		message.warning('Agar loginingiz bolmasa iltimos ortga qayting')
	}
	const clearLog = () => {
		localStorage.clear()
		message.success('Logindan chiqib ketildi')
	}
	const logins = localStorage.getItem('login')
	return (
		<div className='border-b w-full'>
			<nav className='w-[95vw] mx-auto h-[10vh] flex justify-between items-center'>
				<div className='flex w-full justify-between items-center'>
					<div className='logo'>
						<Link to='/'>
							<img src={rivoq} alt='rivoq logo' width={130} />
						</Link>
					</div>
					<div>
						<InputDemo />
					</div>
					<div>
						<Link to={'/login'}>
							{logins ? (
								<Button
									variant='solid'
									color='primary'
									size='middle'
									onClick={clearLog}
								>
									Chiqish
								</Button>
							) : (
								<Button
									variant='solid'
									color='primary'
									size='middle'
									onClick={seccessLogin}
								>
									Kirish
								</Button>
							)}
						</Link>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
