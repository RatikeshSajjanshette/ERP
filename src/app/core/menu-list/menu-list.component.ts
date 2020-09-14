import { Component, OnInit } from '@angular/core';
import { HttpBaseService } from '../services/http-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menuList = [
    {
      key: 'admin',
      label: "ADMIN",
      url: "assets/dropdown-jsons/admin.json"
    },
    {
      key: 'masters',
      label: "MASTERS",
      url: "assets/dropdown-jsons/master.json"
    },
    {
      key: 'settings',
      label: "SETTINGS",
      url: "assets/dropdown-jsons/settings.json"
    },
    {
      key: 'purchases',
      label: "PURCHASES",
      url: "assets/dropdown-jsons/purchases.json"
    },
    {
      key: 'inventory',
      label: "INVENTORY",
      url: "assets/dropdown-jsons/inventory.json"
    },
    {
      key: 'orders',
      label: "ORDERS",
      url: "assets/dropdown-jsons/orders.json"
    },
    {
      key: 'invoices',
      label: "INVOICES",
      url: "assets/dropdown-jsons/invoices.json"
    },
    {
      key: 'accounts',
      label: "ACCOUNTS",
      url: "assets/dropdown-jsons/accounts.json"
    },
    {
      key: 'reports',
      label: "REPORTS",
      url: "assets/dropdown-jsons/reports.json"
    }
  ]
  listItems = [];
  constructor(private _httpBaseService: HttpBaseService,
    private _router: Router) { }

  ngOnInit() { }

  getMenuListName(url: string): void {
    this.listItems = [];
    this._httpBaseService.get<any>(url).subscribe((data) => {
      this.listItems = data;
    })
  }

  mouseLeave(): void {
    this.listItems = [];
  }

  itemClick(url: string): void {
    this._router.navigateByUrl(url);
    this.mouseLeave();
  }
}
