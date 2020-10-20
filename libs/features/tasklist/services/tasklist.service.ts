import { Injectable } from '@angular/core';
import { TaskItem } from '../models/task-item.model';

@Injectable({providedIn: 'root'})
export class TaskListService {

    private taskList: TaskItem[] = [
        {title: 'install Node'},
        {title: 'install Nx CLI'},
        {title: 'create new app'},
        {title: 'serve app'},
        {title: 'develop app'},
        {title: 'deploy app'},
      ];
    
      getTaskList() {
        return this.taskList;
      }
}
