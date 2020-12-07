import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { SharedModule } from '../shared/shared.module';
import { ButtonsComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: ButtonsComponent,
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [ButtonsComponent],
  exports: [ButtonsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ButtonsModule {}
