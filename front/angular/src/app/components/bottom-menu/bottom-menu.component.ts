import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-bottom-menu',
  imports: [RouterModule],
  templateUrl: './bottom-menu.component.html'    
})
export class BottomMenuComponentComponent {
  constructor(private router: Router) {}

  navegar(ruta: string): void {
    console.log('Navegando a:', ruta);
    this.router.navigate([`/${ruta}`]);
  }
 }
