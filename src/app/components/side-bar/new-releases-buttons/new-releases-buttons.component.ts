import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-releases-buttons',
  templateUrl: './new-releases-buttons.component.html',
  styleUrls: ['./new-releases-buttons.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class NewReleasesButtonsComponent {
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
