import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SERVICES } from './services';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  providers: [...SERVICES]
})
export class TasklistModule {}
