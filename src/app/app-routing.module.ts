import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard, HomeGuardDeActivate } from './@guards/home.guard';
import { LoginGuard } from './@guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./@common/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./@common/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    canActivate: [HomeGuard],
    canDeactivate: [HomeGuardDeActivate],
    loadChildren: () =>
      import('./@modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
