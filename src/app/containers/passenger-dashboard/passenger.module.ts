import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PassengerDashboardComponent} from './passenger-dashboard.component';
import {PassengerListComponent} from '../passenger-list/passenger-list.component';
import {PassengerComponent} from '../../components/passenger/passenger.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PassengerDashboardComponent, PassengerListComponent, PassengerComponent],
  exports: [PassengerDashboardComponent, PassengerListComponent, PassengerComponent]
})

export class PassengerModule {
}
