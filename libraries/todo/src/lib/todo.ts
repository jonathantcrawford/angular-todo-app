
export enum TodoStatus {
    Complete = 'complete',
    Incomplete='incomplete'
}
export interface Todo {
    id: number;
    name: string;
    status: TodoStatus;
}

export interface TodoAPIResponse {
    todoKey: number;
    results: Todo[];
  }