import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { dummyTasks } from '../dummy-tasks';
import { SingletaskComponent } from '../singletask/singletask.component';
import { AddtaskComponent } from '../addtask/addtask.component';
import { AddTask, Task } from '../models/user.task';

@Component({
  selector: 'app-tasks',
  imports: [SingletaskComponent, AddtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() taskuserid!: string;

  isAddingTask = false;

  tasks = dummyTasks;

  get username() {
    return DUMMY_USERS.find((user) => user.id === this.taskuserid)?.name;
  }

  get usertasks() {
    return this.tasks.filter((task) => task.userId === this.taskuserid);
  }

  onCompleteTask(id: string) {
    console.log('Task id = ' + id);
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(task: AddTask) {
    console.log(this.tasks);
    this.tasks.push({
      summary: task.summary,
      title: task.title,
      dueDate: task.dueDate,
      userId: this.taskuserid,
      id: new Date().getTime().toString(),
    });
    this.isAddingTask = false;
  }
}
