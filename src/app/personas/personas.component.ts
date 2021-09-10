import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl:'./personas.component.html',
    styleUrls:['./personas.component.css']
})
export class PersonasComponent{
    desabilitar=false;
    mensaje='no se ha agregado ninguna persona';
    titulo='erer';
    agregarPersona(){
        this.mensaje = "Persona agregada"
    }
}