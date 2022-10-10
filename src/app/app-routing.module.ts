import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnubisComponent } from './annubis/annubis.component';
import { BraumComponent } from './braum/braum.component';
import { HomeComponent } from './home/home.component';
import { HorizonComponent } from './horizon/horizon.component';
import { LeonardoComponent } from './leonardo/leonardo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'leonardo', component: LeonardoComponent},
  {path: 'horizon', component: HorizonComponent},
  {path: 'braum', component: BraumComponent},
  {path: 'annubis', component: AnnubisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
