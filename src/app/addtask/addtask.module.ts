import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtaskPageRoutingModule } from './addtask-routing.module';

import { AddtaskPage } from './addtask.page';
import { TaskFormComponent } from '../components/task-form/task-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtaskPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AddtaskPage, TaskFormComponent],
})
export class AddtaskPageModule {}
