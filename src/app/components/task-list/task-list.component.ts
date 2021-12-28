import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  constructor(private ts: TaskService) {}

  ngOnInit() {
    this.tasks = this.ts.getTasks();
  }

  check(id) {
    console.log(this.tasks);
    this.ts.finishTask(id);
  }
}
