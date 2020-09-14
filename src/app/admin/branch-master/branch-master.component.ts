import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-branch-master',
  templateUrl: './branch-master.component.html',
  styleUrls: ['./branch-master.component.scss']
})
export class BranchMasterComponent implements OnInit {
  branchMasterForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createBranchMasterForm();
  }

  createBranchMasterForm() {
    this.branchMasterForm = this.fb.group({
      branchCode: new FormControl(''),
      branchName: new FormControl(''),
      parentBranch: new FormControl(''),
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      area: new FormControl(''),
      address: new FormControl(''),
      pinCode: new FormControl(''),
      village: new FormControl(''),
      gstNo: new FormControl(''),
      tanNo: new FormControl(''),
      website: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      regNo: new FormControl(''),
      category: new FormControl('')
    });
  }

  get branchCode(): FormControl {
    return this.branchMasterForm.get('branchCode') as FormControl;
  }
  get branchName(): FormControl {
    return this.branchMasterForm.get('branchName') as FormControl;
  }
  get parentBranch(): FormControl {
    return this.branchMasterForm.get('parentBranch') as FormControl;
  }
  get country(): FormControl {
    return this.branchMasterForm.get('country') as FormControl;
  }
  get state(): FormControl {
    return this.branchMasterForm.get('state') as FormControl;
  }
  get city(): FormControl {
    return this.branchMasterForm.get('city') as FormControl;
  }
  get area(): FormControl {
    return this.branchMasterForm.get('area') as FormControl;
  }
  get address(): FormControl {
    return this.branchMasterForm.get('address') as FormControl;
  }
  get pinCode(): FormControl {
    return this.branchMasterForm.get('pinCode') as FormControl;
  }
  get village(): FormControl {
    return this.branchMasterForm.get('village') as FormControl;
  }
  get gstNo(): FormControl {
    return this.branchMasterForm.get('gstNo') as FormControl;
  }
  get tanNo(): FormControl {
    return this.branchMasterForm.get('tanNo') as FormControl;
  }
  get website(): FormControl {
    return this.branchMasterForm.get('website') as FormControl;
  }
  get email(): FormControl {
    return this.branchMasterForm.get('email') as FormControl;
  }
  get phone(): FormControl {
    return this.branchMasterForm.get('phone') as FormControl;
  }
  get regNo(): FormControl {
    return this.branchMasterForm.get('regNo') as FormControl;
  }
  get category(): FormControl {
    return this.branchMasterForm.get('category') as FormControl;
  }

  saveForm(){
    console.log(this.branchMasterForm.value);
  }

  resetForm(){
    this.branchMasterForm.reset();
  }
}
