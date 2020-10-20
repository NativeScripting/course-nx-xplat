import { Component } from '@angular/core';

import { BaseComponent } from '@nuvious/core';
import { TaskItem, TaskListService } from '@nuvious/features';

@Component({
  moduleId: module.id,
  selector: 'nuvious-tasklist',
  templateUrl: './tasklist.component.html',
})
export class TasklistComponent extends BaseComponent {

  tasks: TaskItem[] = [];

  constructor(private taskListService: TaskListService) {
    super();
  }

  ngOnInit() {
    this.tasks = this.taskListService.getTaskList();
  }
}
