import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnubisComponent } from './annubis/annubis.component';
import { BraumComponent } from './braum/braum.component';
import { HorizonComponent } from './horizon/horizon.component';
import { LeonardoComponent } from './leonardo/leonardo.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnubisComponent,
    BraumComponent,
    HorizonComponent,
    LeonardoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
