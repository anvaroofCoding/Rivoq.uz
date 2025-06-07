import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../features/post/postsSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		posts: postsReducer,
	},
})

// Tiplar
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
