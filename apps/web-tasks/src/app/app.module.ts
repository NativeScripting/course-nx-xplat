import { NgModule } from '@angular/core';

// libs
import { environment } from '@nuvious/core';
import {ENVIRONMENT_CONFIGURATION_TOKEN} from '@nuvious/core/environments/environment-configuration-token';
import { AuthModule } from '@nuvious/web/features/auth';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AuthcallbackComponent } from './authcallback.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule, AuthModule],
  declarations: [AppComponent, AuthcallbackComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ENVIRONMENT_CONFIGURATION_TOKEN,
      useValue: environment
    }
  ]
})
export class AppModule {}
