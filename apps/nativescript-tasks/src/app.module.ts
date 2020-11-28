// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// libs
import { environment } from '@nuvious/core';
import { ENVIRONMENT_CONFIGURATION_TOKEN } from '@nuvious/core/environments/environment-configuration-token';
import { AuthModule } from '@nuvious/nativescript/features/auth';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule, AuthModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ENVIRONMENT_CONFIGURATION_TOKEN,
      useValue: environment,
    },
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
