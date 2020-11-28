import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// libs
import { UISharedModule } from '@nuvious/features';
import { HeaderComponent, LoginComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    UISharedModule,
  ],
  declarations: [HeaderComponent, LoginComponent],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    UISharedModule,
    HeaderComponent,
    LoginComponent
  ],
})
export class UIModule {}
