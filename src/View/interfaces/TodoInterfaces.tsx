import { TodoItemModel } from "../../model/TodoItemModel";

export interface ITodoItem {
  id: number,
  title: string,
  time: number,
  createdTime: number,
  done: boolean,
}

export interface ITodoList {
  data: Array<TodoItemModel>,
}
interface OnPressFunc {
  (value: boolean): void;
}
interface CalendarOnPressFunc {
  (status: boolean, startValue: number, endValue: number): void;
}

export interface IAddTask {
  onPress: OnPressFunc,
  showAlertDialog: boolean,
}
export interface ICalendar {
  onPress: CalendarOnPressFunc,
  showAlertDialog: boolean,

}
export interface IEditTask {
  onPress: OnPressFunc,
  showAlertDialog: boolean,
  id: number,
  title: string,
  dateTime: number
}
export interface ITaskInfo {
  onPress: OnPressFunc,
  showAlertDialog: boolean,
  title: string,
  time: number,
  done: boolean,
  createdTime: number
}
export interface IDeleteTask {
  onPress: OnPressFunc,
  showAlertDialog: boolean,
  item: TodoItemModel
}

