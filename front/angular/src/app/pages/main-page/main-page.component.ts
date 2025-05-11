import { Component, signal } from '@angular/core';
import { BottomMenuComponentComponent } from '../../components/bottom-menu/bottom-menu.component';
import { firstValueFrom } from 'rxjs';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: 'main-page.component.html',
  imports: [BottomMenuComponentComponent,RouterOutlet]
})
export class MainPageComponent {

  // onMenuClick(tipoAlerta: number): void {
  //   console.log('Menu item clicked with ID:', tipoAlerta);
  //   // Aquí puedes manejar la lógica según el ID recibido
  // }
 }
