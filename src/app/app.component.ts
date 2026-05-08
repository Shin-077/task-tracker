import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask: string = '';
  tasks: Task[] = [
    { title: 'Learn Angular basics', completed: true },
    { title: 'Build a small project', completed: false },
  ];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        title: this.newTask.trim(),
        completed: false
      });
      this.newTask = '';
    }
  }

  toggleComplete(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}