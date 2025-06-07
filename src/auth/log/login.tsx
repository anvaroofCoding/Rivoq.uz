import { Button, Form, Input, message } from 'antd'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import log from '../../assets/log/rivoq.png'

const Login = () => {
	const navigate = useNavigate()

	interface qiymatiskiy {
		username: string
		password: string
	}

	const state = useSelector((state: qiymatiskiy) => state.counter)
	console.log(state)

	const [form] = Form.useForm()
	const [loading, setLoading] = useState(false)
	const onfinish = (value: qiymatiskiy) => {
		message.success('Yuborildi!')
		setLoading(true)
		if (value.username == state.username && value.password == state.password) {
			message.success('Muzaffaqiyatli loginga kirdingiz')
			navigate('/')
			localStorage.setItem('login', state)
		} else {
			message.error(
				"Login parol xato iltimos qilaman: Agarda login/parol bo'lmasa 'Bosh Sahifaga qayting'"
			)
		}
		console.log(value)
	}

	return (
		<div>
			<div className='grid grid-cols-2 do-sans'>
				<div className=' w-full h-screen flex justify-center items-center'>
					<img src={log} alt='side logo' />
				</div>
				<div className='w-full h-screen flex justify-center items-center flex-col'>
					<Form
						form={form}
						layout='vertical'
						onFinish={onfinish}
						style={{ maxWidth: 700, marginTop: 50 }}
					>
						<Form.Item
							label='Foydalanuvchi nomi'
							name='username'
							style={{ width: 500 }}
							rules={[
								{
									required: true,
									message: 'Iltimos foydalanuvchi nomini kiriting!',
								},
							]}
						>
							<Input placeholder='Foydalanuvchi nomi' size='large' />
						</Form.Item>
						<Form.Item
							label='Parol'
							name='password'
							rules={[
								{ required: true, message: 'Iltimos parolingizni kiriting!' },
							]}
						>
							<Input placeholder='Parol' size='large' />
						</Form.Item>
						<Form.Item>
							<h2>
								Agar loginingiz bo'lmasa ortga qayting:{' '}
								<Link to='/' className='font-bold'>
									Bosh sahifa
								</Link>
							</h2>
						</Form.Item>
						<Form.Item>
							<Button
								type='primary'
								htmlType='submit'
								size='large'
								loading={loading}
							>
								Ro'yxatdan o'tish
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default Login
