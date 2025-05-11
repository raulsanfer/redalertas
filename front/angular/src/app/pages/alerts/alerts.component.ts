import {  Component, effect, inject, Inject, signal } from '@angular/core';
import { AlertsMenutopComponent } from "../../components/alerts-menutop/alerts-menutop.component";
import { RedAlertasService } from '../../services/redalertas.service';
import { of } from 'rxjs';
import {rxResource, toSignal} from '@angular/core/rxjs-interop';
import { AlertsListComponent } from "../../components/alerts-list/alerts-list.component";
import { Alerta } from '../../model/Alerta';


@Component({
  selector: 'app-alerts',
  imports: [AlertsMenutopComponent, AlertsListComponent],
  templateUrl: './alerts.component.html',    
})
export class AlertsComponent {
  
  valorTipoAlerta = signal<number>(1);
  private redAlertasService = inject(RedAlertasService);

  //alertas = signal<Alerta[]>([]); // Creamos un signal que contiene las alertas
  // Creamos un signal que contiene las alertas
  alertas = toSignal(
    this.redAlertasService.getAlerts(this.valorTipoAlerta()), // Llamamos al servicio
    { initialValue: [] } // Valor inicial vacío hasta que lleguen datos
  );
//   alertsService = Inject(RedAlertasService);
//   alertas: Alerta[] = [];

constructor() {
  // this.redAlertasService.getAlerts(1).toPromise().then((alerts) => {
  //   if (alerts) { // <-- Comprobamos si alerts no es undefined
  //     for (const alerta of alerts) {
  //       console.log(alerta);
  //     }
  //   } else {
  //     console.warn('No se recibieron alertas');
  //   }
  // }).catch(error => {
  //   console.error('Error:', error);
  // });
}
//    this.obtenerAlertas();
//   //    /*effect(() => {
//   //     console.log('valorTipoAlerta cambió a:', this.valorTipoAlerta());

//   //     this.reaccionarACambio(this.valorTipoAlerta());
//   //   });*/
  
//   obtenerAlertas() {
//     this.alertsService.getAlerts(this.valorTipoAlerta()).subscribe({
//       next: (data: Alerta[]) => {
//         this.alertas = data;
//       },
//       error: (err: any) => {
//         console.error('Error al obtener alertas', err);
//       }
//     });
//   }
  // alertResource = rxResource({
  //   request: () =>({alertType: this.valorTipoAlerta()}),
  //   loader:({request})=>
  //   {
  //     if(!request.alertType)
  //     {
  //       return of([]);
  //     }
  //     return this.alertsService.getAlertas(request.alertType);
  //   }
  // })

  // reaccionarACambio(nuevoValor: number): void {
  //   // Lógica para manejar el cambio
  //   console.log('Reaccionando al cambio de valorTipoAlerta:', nuevoValor);
  //   // Aquí puedes agregar la lógica que necesites
  // }
 }
