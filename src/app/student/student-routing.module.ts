import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//Component
import { StudentPageComponent } from './pages/student-page/student-page.component';


const routes: Routes = [
  {
    path:'',
    component: StudentPageComponent
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
