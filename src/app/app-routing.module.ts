import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketSearchComponent } from './ticket-search/ticket-search.component';


const routes: Routes = [
  { path: '', component: TicketSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
