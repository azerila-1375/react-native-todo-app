export class TodoItemModel {
    id: number = 0;
    title: string = "";
    time: number = Date.now();
    createdTime: number = Date.now();
    done: boolean = false;
}