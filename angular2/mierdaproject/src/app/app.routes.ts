import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';
import { AddComponent } from './add/add.component';

export const routes: Routes = [
  { path: 'tabla', component: TablaComponent },
  { path: 'add', component: AddComponent },
  { path: '', redirectTo: '/tabla', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }