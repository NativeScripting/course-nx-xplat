import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { SharedModule } from '../shared/shared.module';
import { PAGELOGIN_COMPONENTS, PageLoginComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: PageLoginComponent,
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...PAGELOGIN_COMPONENTS],
  exports: [...PAGELOGIN_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PageLoginModule {}
