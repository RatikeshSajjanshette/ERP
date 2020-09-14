import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, MenuListComponent, FooterComponent],
  imports: [
    CommonModule,HttpClientModule],
  exports: [HeaderComponent, MenuListComponent,FooterComponent]
})
export class CoreModule { }
