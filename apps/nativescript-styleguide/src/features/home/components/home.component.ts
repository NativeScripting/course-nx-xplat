import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { BaseComponent } from '@nuvious/core';

@Component({
  moduleId: module.id,
  selector: 'abc-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends BaseComponent {

  constructor(private _routerExt: RouterExtensions) {
    super();
  }

  // for quick sandbox feature creation
  goTo(route: string) {
    this._routerExt.navigate([route]);
  }

}
