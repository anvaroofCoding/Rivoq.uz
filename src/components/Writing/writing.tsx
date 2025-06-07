import axios from 'axios'
import { useEffect, useState } from 'react'

interface Post {
	id: string
	name: string
	avatar: string
	comment: string
	createdAt: string
}

const Writing = () => {
	const [posts, setPosts] = useState<Post[]>([])
	const [loading, setLoading] = useState(true)
	const [newComment, setNewComment] = useState('')
	const [editId, setEditId] = useState<string | null>(null)
	const [editText, setEditText] = useState('')

	const apiUrl = 'https://680d912dc47cb8074d90ad21.mockapi.io/users'

	const fetchPosts = async () => {
		try {
			setLoading(true)
			const res = await axios.get(apiUrl)
			setPosts(res.data)
		} catch (err) {
			console.error('Xatolik:', err)
		} finally {
			setLoading(false)
		}
	}

	const deletePost = async (id: string) => {
		await axios.delete(`${apiUrl}/${id}`)
		fetchPosts()
	}

	const createPost = async () => {
		if (!newComment.trim()) return
		await axios.post(apiUrl, {
			name: 'Rivoqchi',
			avatar: `https://i.pravatar.cc/150?u=${Math.random()}`,
			comment: newComment,
			createdAt: new Date().toISOString(),
		})
		setNewComment('')
		fetchPosts()
	}

	const updatePost = async () => {
		if (!editId || !editText.trim()) return
		await axios.put(`${apiUrl}/${editId}`, {
			comment: editText,
		})
		setEditId(null)
		setEditText('')
		fetchPosts()
	}

	useEffect(() => {
		fetchPosts()
	}, [])

	const Skeleton = () => (
		<div className='flex gap-3 items-start p-4 rounded-lg shadow border bg-gray-100 dark:bg-neutral-800 animate-pulse'>
			<div className='w-10 h-10 bg-gray-300 rounded-full'></div>
			<div className='flex-1 space-y-2'>
				<div className='h-4 bg-gray-300 rounded w-1/3'></div>
				<div className='h-3 bg-gray-300 rounded w-2/3'></div>
			</div>
		</div>
	)

	return (
		<div className='w-full '>
			<div className='h-[calc(100vh-60px)] overflow-y-auto bg-gray-50 dark:bg-neutral-900 w-full'>
				<div className='max-w-4xl mx-auto p-4 space-y-6'>
					<h2 className='text-2xl font-bold text-center text-blue-600'>
						Rivoq – Yozuvlar
					</h2>

					{/* Yozuvlar ro'yxati */}
					<div className='space-y-4'>
						{loading
							? Array(4)
									.fill(0)
									.map((_, i) => <Skeleton key={i} />)
							: posts.map(post => (
									<div
										key={post.id}
										className='flex gap-3 items-start p-4 rounded-lg shadow border bg-white dark:bg-neutral-800 flex-col sm:flex-row'
									>
										<img
											src={post.avatar}
											alt={post.name}
											className='w-10 h-10 rounded-full border object-cover'
										/>
										<div className='flex-1 w-full'>
											<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
												<p className='font-semibold text-gray-800 dark:text-white'>
													{post.name}
												</p>
												<div className='flex gap-2 mt-2 sm:mt-0'>
													<button
														onClick={() => {
															setEditId(post.id)
															setEditText(post.comment)
														}}
														className='px-3 py-1 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-medium shadow hover:brightness-110 transition'
													>
														Tahrirlash
													</button>
													<button
														onClick={() => deletePost(post.id)}
														className='px-3 py-1 rounded-md bg-gradient-to-r from-red-500 to-red-600 text-white font-medium shadow hover:brightness-110 transition'
													>
														O‘chirish
													</button>
												</div>
											</div>

											{editId === post.id ? (
												<div className='mt-2'>
													<textarea
														value={editText}
														onChange={e => setEditText(e.target.value)}
														className='w-full p-2 rounded border'
													/>
													<button
														onClick={updatePost}
														className='mt-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition'
													>
														Saqlash
													</button>
												</div>
											) : (
												<p className='text-gray-700 dark:text-gray-300 mt-1 text-sm'>
													{post.comment}
												</p>
											)}
										</div>
									</div>
							  ))}
					</div>

					{/* Yangi yozuv */}
					<div className='p-4 rounded border bg-white dark:bg-neutral-800'>
						<h4 className='font-semibold mb-2 text-gray-700 dark:text-white'>
							Yangi yozuv:
						</h4>
						<textarea
							className='w-full p-2 border rounded resize-none'
							rows={3}
							value={newComment}
							onChange={e => setNewComment(e.target.value)}
						/>
						<button
							onClick={createPost}
							className='mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
						>
							Yuborish
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Writing
