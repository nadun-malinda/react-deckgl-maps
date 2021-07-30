import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    layers: [],
    data: {},
    error: {}
}

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setLayer(state, action) {
            state.layers.push(action.payload.layer)
        },
        setData(state, action) {
            state.data = action.payload.data
        },
        setError(state, action) {
            state.error = action.payload.error
        }
    }
})

export const mapActions = mapSlice.actions
export default mapSlice