export interface Task {
  title: string;
  description: string;
  completed: TaskStatus;
  creation_date: Date;
  deadline: Date;
}

export enum TaskStatus {
  TODO = 0,
  DOING = 1,
  DONE = 2,
  BLOCKED = 3,
}
