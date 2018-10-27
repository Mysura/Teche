import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { ReactComponent } from './react/react.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: 'Angular', component: Component1Component },
  { path: 'React', component: ReactComponent },
  { path: 'main', component: MainComponent },
 

  // otherwise redirect to home
  { path: "", redirectTo: "main", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
