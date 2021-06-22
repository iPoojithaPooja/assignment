import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './mat/mat.module';
import { MainComponent } from './main/main.component'
import { HttpClientModule } from '@angular/common/http';
import { DilogModalComponent } from './dilog-modal/dilog-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DilogModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    MatModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
