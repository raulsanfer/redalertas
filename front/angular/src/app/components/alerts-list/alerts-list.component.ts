import { Component, Input, input, signal } from '@angular/core';
import { Alerta } from '../../model/Alerta';

@Component({
  selector: 'app-alerts-list',
  imports: [],
  templateUrl: './alerts-list.component.html'
})
export class AlertsListComponent { 
  //alerts = input.required<Alerta[]>();
  @Input() alerts: Alerta[] = [];

}
