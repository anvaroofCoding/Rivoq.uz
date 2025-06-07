import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Writing from './components/Writing/writing.tsx'
import DashboardStats from './Home/Dashboard.tsx'

import { store } from './app/store.tsx'
import Login from './auth/log/login.tsx'
import Register from './auth/register/register.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<App />}>
						<Route path='/' element={<DashboardStats />} />
						<Route path='/writing' element={<Writing />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
)
