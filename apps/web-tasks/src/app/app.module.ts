import { NgModule } from '@angular/core';

// libs
import { environment } from '@nuvious/core';
import {ENVIRONMENT_CONFIGURATION_TOKEN} from '@nuvious/core/environments/environment-configuration-token';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ENVIRONMENT_CONFIGURATION_TOKEN,
      useValue: environment
    }
  ]
})
export class AppModule {}
