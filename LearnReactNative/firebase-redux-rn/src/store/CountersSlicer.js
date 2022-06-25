import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const fetchUserById = createAsyncThunk(
    'fetch/userByIdStatus', async (userId)=>{
        const response = await user.API.fetchById(userId)
        return response.data
    }
)

const CounterSlice = createSlice({
  name: CounterSlice,
  initialState: {
    name: "Naeem ali",
    count: 0},
    reducers: {
        incrementd: state =>{
            state.count += 1
        },
        
        decrementd: state =>{
            state.count -= 1
        },
        reset: state =>{
            state.count = 0
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchUserById.fulfilled, (state, actions)=>{
            state.users = actions.payload
            console.log('Slice', builder);
        })
    }
});
export {fetchUserById}
export const { incremented, decremented, reset } = CounterSlice.actions
export default CounterSlice;
