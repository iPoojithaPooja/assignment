import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    import('./home/home.module').then(
      (m) => m.HomeModule
    ),
  },
  {
    path: 'home',
    loadChildren: () =>
    import('./home/home.module').then(
      (m) => m.HomeModule
    ),
  },
  {
    path : 'main', 
    component : MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
