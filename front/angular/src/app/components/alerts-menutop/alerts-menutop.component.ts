import { Component,EventEmitter, signal, output, Output } from '@angular/core';

@Component({
  selector: 'app-alerts-menutop',
  imports: [],
  templateUrl:'alerts-menutop.component.html'  
})
export class AlertsMenutopComponent { 
  
  //tipoAlerta = output<number>(); //signal<number | null>(null);
  @Output() tipoAlerta = new EventEmitter<number>();
  emitEventCargarAlertas(id: number): void {
    this.tipoAlerta.emit(id); // Actualiza el signal
  }
}
