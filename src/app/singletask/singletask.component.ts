import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/user.task';



@Component({
  selector: 'app-singletask',
  imports: [],
  templateUrl: './singletask.component.html',
  styleUrl: './singletask.component.css',
})
export class SingletaskComponent {

  @Input() task?: Task;
  @Output() complete=new EventEmitter<string>();

  onCompleteTask(){
    console.log("selected task id = "+this.task?.id);
    this.complete.emit(this.task?.id);
  }

 }
