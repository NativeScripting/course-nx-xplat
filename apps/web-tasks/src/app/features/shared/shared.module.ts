import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@nuvious/web';

@NgModule({
  imports: [UIModule],
  exports: [UIModule],
})
export class SharedModule {}
