import { Component } from '@angular/core';
import { IonList, IonSelect, IonItem, IonSelectOption, SelectChangeEventDetail, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonList, IonSelect, IonItem, IonSelectOption, CirculoComponent, TrianguloComponent, CommonModule,
    IonCard, IonCardContent ],
})

export class HomePage {
  tipoFigura:string = ""

  constructor() {}

  esCirculo() { return this.tipoFigura == "circulo"}
  esTriangulo () {return this.tipoFigura == "triangulo"}

  manejarSeleccionFiguraGeometrica($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipoFigura = ($event.detail.value)
    }
}
