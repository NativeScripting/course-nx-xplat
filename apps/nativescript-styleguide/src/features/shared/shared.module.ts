import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@nuvious/nativescript';

@NgModule({
  imports: [UIModule],
  exports: [UIModule]
})
export class SharedModule {}
