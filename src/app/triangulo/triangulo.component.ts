import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonButton, IonItem } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [ CommonModule, FormsModule, IonItem, IonButton, IonInput,  IonCard, IonCardHeader, IonCardContent,  IonCardTitle, IonCardSubtitle ],
  standalone: true,
})

export class TrianguloComponent implements OnInit {
  trianguloLadoA: String = "";
  trianguloLadoB: String = "";
  trianguloLadoC: String = "";
  resultado: number = 0

  constructor() { }

  ngOnInit(): void {

  }
/** 
 * Se utiliza Number para transformar el tipo de dato String y hacerlo
compatible con operadores matemáticos
*/
  calcularPerimetro() {
    this.resultado = Number(this.trianguloLadoA) + Number(this.trianguloLadoB) + Number(this.trianguloLadoC)
  }

}
