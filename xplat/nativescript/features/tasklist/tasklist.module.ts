import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TasklistModule as SharedTasklistModule } from '@nuvious/features';
import { UIModule } from '../ui/ui.module';
import { TasklistComponent } from './components';

@NgModule({
  imports: [SharedTasklistModule, UIModule],
  declarations: [TasklistComponent],
  exports: [TasklistComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TasklistModule {}
