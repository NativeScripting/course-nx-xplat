import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@nuvious/web';

@Component({
  selector: 'nuvious-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
