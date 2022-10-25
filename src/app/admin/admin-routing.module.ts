import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//Components
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
//Guards
import { UserGuardGuard } from '../guards/user-guard.guard';

const routes: Routes = [
  {
    path:'',
    component: AdminPageComponent,
    canActivate: [UserGuardGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
