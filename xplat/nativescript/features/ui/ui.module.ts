import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptRouterModule } from '@nativescript/angular';

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { UISharedModule } from '@nuvious/features';
import { HeaderComponent, LoginComponent } from './components';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    TNSFontIconModule,
    UISharedModule
  ],
  declarations: [
    HeaderComponent,
    LoginComponent
  ],
  exports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    TNSFontIconModule,
    UISharedModule,
    HeaderComponent,
    LoginComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UIModule {}
