import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasklistModuleWeb } from '@nuvious/web';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [SharedModule, TasklistModuleWeb, RouterModule.forChild(routes)],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
