import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonButton, IonItem } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [ CommonModule, FormsModule, IonItem, IonButton, IonInput,  IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle ],
  standalone: true,
})
export class CirculoComponent  implements OnInit {
  radioCirculoStr: String = "";
  resultado: number = 0;

  constructor() { }

  ngOnInit(): void {
    
  }
/**
 * Se incorpora la función "parseFloat" para devolver un número con decimal.
 * Se aplica Number de la misma manera que en el componente triángulo, 
 * para transformar tipo de dato String
 */
  calcularPerimetroCirculo() {

    this.resultado = parseFloat((2 * Math.PI * Number(this.radioCirculoStr)).toFixed(2))

  }

}
