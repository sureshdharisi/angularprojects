import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddTask, Task } from '../models/user.task';
import { FormsModule } from '@angular/forms';
// FormsModule used to enable two way data binding
@Component({
  selector: 'app-addtask',
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css',
})
export class AddtaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<AddTask>();

  summary = '';
  title = '';
  dueDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.submit.emit({
      summary: this.summary,
      title: this.title,
      dueDate: this.dueDate,
    });
  }
}
