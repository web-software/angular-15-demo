import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    title: 'Dashboard',
    path: 'dashboard',
    component: HelloComponent,
  },
  {
    title: 'Dashbaord',
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    title: 'Dashboard',
    path: '**',
    component: HelloComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
