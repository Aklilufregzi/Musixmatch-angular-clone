import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[];
  constructor() {
    this.tasks = [
      { id: 1, title: 'finsih app', dueDate: Date.now(), done: false },
      { id: 2, title: 'finsih job', dueDate: Date.now(), done: false },
      { id: 3, title: 'finsih cod', dueDate: Date.now(), done: false },
    ];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  finishTask(id): void {
    let t = this.tasks.find((task) => task.id == id);
    t.done = true;
  }
}
