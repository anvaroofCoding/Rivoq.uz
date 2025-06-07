import { Link } from 'react-router-dom'
import rivoq from '../../assets/log/rivoq.png'
import { InputDemo } from '../../components/Input/inputDemo'

const Navbar = () => {
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
				</div>
			</nav>
		</div>
	)
}

export default Navbar
