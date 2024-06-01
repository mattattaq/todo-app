import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  taskArray: any[] = [
    {
      taskName: "brush teeth",
      isCompleted: false
    }
  ];

  onSubmit(taskForm: any) {
    console.log(taskForm);
    if (taskForm.valid) {
      this.taskArray.push({
        taskName: taskForm.value.task,
        isCompleted: false
      });
      taskForm.reset();
    }
  }
  onDelete(index: number) {
    console.log(index + 1);
    this.taskArray.splice(index, 1);

  }
}
