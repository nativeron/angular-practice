import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  nombre:string="Juan";
  apellido:string="asdad";
  private edad:number=30;

  getEdad():number{
    return this.edad
  }
}