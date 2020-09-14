export class BranchMaster {
    branchCode: string;
    branchName: string;
    parentBranch: string;
    country: string;
    state: string;
    city: string;
    area: string;
    address: string;
    pinCode: number;
    village: string;
    gstNo: string;
    tanNo: string;
    website: string;
    email: string;
    phone: number;
    regNo: string;
    category: string;

    constructor(dto?: any) {
        if (!!dto) {
          this.branchCode = dto.branchCode;
          this.branchName = dto.branchName;
          this.parentBranch = dto.parentBranch;
          this.country = dto.country;
          this.state = dto.state;
          this.city = dto.city;
          this.area = dto.area;
          this.address = dto.address;
          this.pinCode = dto.pinCode;
          this.village = dto.village;
          this.gstNo = dto.village;
          this.tanNo = dto.tanNo;
          this.website = dto.website;
          this.email = dto.email;
          this.phone = dto.phone;
          this.regNo = dto.regNo;
          this.category = dto.category;
        }
    }
}
