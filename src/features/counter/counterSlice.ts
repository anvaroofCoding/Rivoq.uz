import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
	username: string
	password: string
}

const initialState: CounterState = {
	username: 'deloresc',
	password: 'kalibriID0510',
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {},
})

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions

export default counterSlice.reducer
