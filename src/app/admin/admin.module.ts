import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { BranchMasterComponent } from './branch-master/branch-master.component';
import { EmployeeMasterComponent } from './employee-master/employee-master.component';
import { CompanyMasterComponent } from './company-master/company-master.component';



@NgModule({
  declarations: [BranchMasterComponent, EmployeeMasterComponent, CompanyMasterComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [BranchMasterComponent, EmployeeMasterComponent, CompanyMasterComponent]
})
export class AdminModule { }
