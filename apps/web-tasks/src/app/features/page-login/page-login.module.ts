import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { PAGELOGIN_COMPONENTS, PageLoginComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: PageLoginComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...PAGELOGIN_COMPONENTS],
  exports: [...PAGELOGIN_COMPONENTS],
})
export class PageLoginModule {}
