import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TodoItemModel } from '../../model/TodoItemModel';


const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        todoAdded(state: Array<any>, action: PayloadAction<any>) {
            state.push(action.payload)
        },
        todoPut(state: Array<any>, action: PayloadAction<any>) {
            state.push(...action.payload);
        },
        todoDeleted(state: Array<any>, action: PayloadAction<any>) {
            state.splice(state.findIndex((item) => item.id === action.payload), 1);
        },
        todoEdited(state: Array<any>, action: PayloadAction<any>) {
            const todo: any = state.find((todo: any) => todo.id === action.payload.id)
            todo.title = action.payload.title;
            todo.time = action.payload.time;
        },
        todoToggled(state: Array<any>, action: PayloadAction<any>) {
            const todo: any = state.find((todo: TodoItemModel) => todo.id === action.payload.id)
            todo.done = action.payload.done
        }
    }
})

export const { todoAdded, todoPut, todoDeleted, todoEdited, todoToggled } = todoSlice.actions
export default todoSlice.reducer

