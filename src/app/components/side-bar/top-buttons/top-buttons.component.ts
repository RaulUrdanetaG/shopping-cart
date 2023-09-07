import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-buttons',
  templateUrl: './top-buttons.component.html',
  styleUrls: ['./top-buttons.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class TopButtonsComponent {
  buttonStates: boolean[] = [];

  constructor() {
    // Inicializa el arreglo con 'false' para cada botón
    for (let i = 0; i < 3; i++) {
      this.buttonStates.push(false);
    }
  }

  hoverTrue(index: number) {
    this.buttonStates[index] = true;
  }

  hoverFalse(index: number) {
    this.buttonStates[index] = false;
  }

}
