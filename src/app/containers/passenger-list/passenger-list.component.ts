import {Component} from '@angular/core';
import {Passenger, passengers} from '../../../assets/passengers';

@Component({
  selector: 'passenger-list',
  templateUrl: 'passenger-list.component.html',
  styleUrls: ['passenger-list.component.css']
})

export class PassengerListComponent {
  passengers: Passenger[] = passengers;


}
