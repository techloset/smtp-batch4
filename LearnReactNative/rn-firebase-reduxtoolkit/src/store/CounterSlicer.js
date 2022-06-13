import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)

const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    userName: 'naveed',
    count: 0
  },
  reducers: {
    incremented: state => {
      state.count += 1
    },
    decremented: state => {
      state.count -= 1
    },
    reset: (state)=> {
     state.count = 0
    }
  }
  ,
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.users = action.payload
    })
  },
})

export const { incremented, decremented, reset } = CounterSlice.actions
export {fetchUserById}

export default CounterSlice;

