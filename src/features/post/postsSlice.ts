import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
	value: number
}

const initialState: CounterState = {
	value: 0,
}

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
})

export const {} = postsSlice.actions

export default postsSlice.reducer
