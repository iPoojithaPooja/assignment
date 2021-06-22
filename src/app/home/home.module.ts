import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from './../mat/mat.module'
import {HomeComponent} from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
@NgModule({
  declarations: [
    HomeComponent 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
