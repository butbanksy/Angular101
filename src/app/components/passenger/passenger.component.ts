import {Component, Input} from '@angular/core';
import {Passenger} from '../../../assets/passengers';

@Component({
  selector: 'passenger',
  templateUrl: 'passenger.component.html',
  styleUrls: ['passenger.component.css']
})

export class PassengerComponent {
  @Input() passenger: Passenger;
  @Input() id: number;
}
