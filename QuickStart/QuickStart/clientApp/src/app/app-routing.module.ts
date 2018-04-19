import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'first', component: FirstPageComponent },
  { path: 'second', component: SecondPageComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
