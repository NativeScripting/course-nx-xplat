import { NgModule } from '@angular/core';
import { TasklistModule as SharedTasklistModule } from '@nuvious/features';
import { UIModule } from '../ui/ui.module';
import { TasklistComponent } from './components';

@NgModule({
  imports: [SharedTasklistModule, UIModule],
  declarations: [TasklistComponent],
  exports: [TasklistComponent],
})
export class TasklistModuleWeb {}
