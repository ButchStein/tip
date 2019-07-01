import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import { ProductsPageComponent } from './products-page/products-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import {SystemComponent} from './system.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [ProductsPageComponent, CategoriesPageComponent, NewsPageComponent, SystemComponent]

})
export class SystemModule {

}
