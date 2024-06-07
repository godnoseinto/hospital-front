import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharesModule } from '../shares/shares.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home.routing';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharesModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
