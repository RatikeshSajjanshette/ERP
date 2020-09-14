import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BranchMasterComponent } from './admin/branch-master/branch-master.component';
import { HomeComponent } from './home/home/home.component';
import { EmployeeMasterComponent } from './admin/employee-master/employee-master.component';
import { CompanyMasterComponent } from './admin/company-master/company-master.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'employee-master',
    component: EmployeeMasterComponent
  },
  {
    path: 'company-master',
    component: CompanyMasterComponent
  },
  {
    path: 'branch-master',
    component: BranchMasterComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
