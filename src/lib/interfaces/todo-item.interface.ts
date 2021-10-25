export interface Task {
  title: string;
  description: string;
  status: TaskStatus;
  creation_date: string;
  deadline: string;
}

export enum TaskStatus {
  TODO = 0,
  DOING = 1,
  DONE = 2,
  BLOCKED = 3,
}
