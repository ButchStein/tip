import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SystemComponent} from './system.component';
import {NewsPageComponent} from './news-page/news-page.component';
import {CategoriesPageComponent} from './categories-page/categories-page.component';
import {ProductsPageComponent} from './products-page/products-page.component';


const routes: Routes = [{
  path: 'system', component: SystemComponent, children: [
    {path: 'news', component: NewsPageComponent},
    {path: 'categories', component: CategoriesPageComponent},
    {path: 'products', component: ProductsPageComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {

}
