import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//Component
import { StudentPageComponent } from './pages/student-page/student-page.component';
//Guards
import { UserGuardGuard } from '../guards/user-guard.guard';


const routes: Routes = [
  {
    path:'',
    component: StudentPageComponent,
    canActivate: [UserGuardGuard]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentRoutingModule { }
