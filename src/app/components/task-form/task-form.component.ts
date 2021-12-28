import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private ts: TaskService,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: [''],
    });
  }

  submit() {
    console.log();

    let t: Task = {
      id: this.ts.getTasks().length + 1,
      title: this.taskForm.value.title,
      done: false,
      dueDate: this.taskForm.value.dueDate,
    };

    this.ts.addTask(t);
    this.presentToast();
    this.router.navigateByUrl('');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Task Added .',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
}
