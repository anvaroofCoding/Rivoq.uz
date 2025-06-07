import { Button, Form, Input, message } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import log from '../../assets/log/rivoq.png'

const Register = () => {
	interface qiymatiskiy {
		username: string
		password: string
	}
	const [form] = Form.useForm()
	const [loading, setLoading] = useState(false)
	const onfinish = (value: qiymatiskiy) => {
		message.success('Yuborildi!')
		setLoading(true)
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
							label='Ism'
							name='name'
							style={{ width: 500 }}
							rules={[
								{ required: true, message: 'Iltimos ismingizni kiriting!' },
							]}
						>
							<Input placeholder='Ism' size='large' />
						</Form.Item>
						<Form.Item
							label='Foydalanuvchi nomi'
							name='username'
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
								Agarda sizning loginingiz bo'lsa:{' '}
								<Link to='/login' className='font-bold'>
									Login
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

export default Register
