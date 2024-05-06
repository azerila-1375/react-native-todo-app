import { TodoItemModel } from './../model/TodoItemModel';
import { storeData, getData } from './AsyncStorageController'
export default class HomeController {

    static async getTodoList() {
        let list: Array<any> = [];
        const ListItem = new TodoItemModel();
        let data = [];
        data = await getData('todo');
        if (data == null) data = [];
        data.map((item: any, index: number) => {
            list.push({
                id: item.id,
                title: item.title,
                time: item.time,
                createdTime: item.createdTime,
                done: item.done,
            });
        });


        return list;
    }



    static async addTodoItem(title: string, time: number, createdTime: number, done: boolean = false) {
        let data = [];
        data = await getData('todo');
        if (data == null) data = [];
        data.push({
            id: data.length + 1,
            title: title,
            time: time,
            createdTime: createdTime,
            done: done,
        });
        try {
            await storeData('todo', data);

            return {
                success: true,
                Message: "The operation was successfully completed."
            };
        } catch (e) {
            return {
                success: false,
                Message: "The operation failed."
            };
        }
    }
    static async deleteTodoItem(todoItem: TodoItemModel) {
        let data = [];
        data = await getData('todo');
        if (data == null) data = [];
        let index = data.findIndex((item: any) => item.id == todoItem.id);
        data = [
            ...data.slice(0, index),
            ...data.slice(index + 1)
        ]


        try {
            await storeData('todo', data);
            return {
                success: true,
                Message: "The operation was successfully completed."
            };
        } catch (e) {
            return {
                success: false,
                Message: "The operation failed."
            };
        }

    }

    static async editTodoItem(todoItem: any) {
        let data: Array<any> = [];
        let temp: Array<any> = [];
        data = await getData('todo');

        data.map((item: any) => {

            if (item.id == todoItem.id) {
                temp.push({
                    id: item.id,
                    title: todoItem.title,
                    time: todoItem.time,
                    createdTime: item.createdTime,
                    done: item.done,
                });
            } else {
                temp.push(item);
            }
        });

        try {
            await storeData('todo', temp);
            return {
                success: true,
                Message: "The operation was successfully completed."
            };
        } catch (e) {
            return {
                success: false,
                Message: "The operation failed."
            };
        }

    }

    static async doneChangeTodoItem(todoItem: any) {
        let data: Array<any> = [];
        let temp: Array<any> = [];
        data = await getData('todo');

        data.map((item: any) => {

            if (item.id == todoItem.id) {
                temp.push({
                    id: item.id,
                    title: item.title,
                    time: item.time,
                    createdTime: item.createdTime,
                    done: todoItem.done,
                });
            } else {
                temp.push(item);
            }
        });

        try {
            await storeData('todo', temp);
            return {
                success: true,
                Message: "The operation was successfully completed."
            };
        } catch (e) {
            return {
                success: false,
                Message: "The operation failed."
            };
        }

    }
}