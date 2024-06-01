import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ClassesComponent } from './classes/classes.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'trainers', component: TrainersComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'products', component: ContactComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
