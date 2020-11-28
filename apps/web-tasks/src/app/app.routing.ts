// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app
import { SharedModule } from './features/shared/shared.module';
import { AuthcallbackComponent } from './authcallback.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'page-login',
    loadChildren: () =>
      import('./features/page-login/page-login.module').then(
        (m) => m.PageLoginModule
      ),
  },
  {
    path: 'authcallback',
    component: AuthcallbackComponent
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
