import { Component, OnInit,} from '@angular/core';
import { Alumno } from "../alumno.model";
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  
})
export class ListaAlumnosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  alumnos: any =["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  nuevoAlumno: Alumno = {
    Presente: false,
    Nombre: '',
  };
  
  agregarAlumno(): void {
    this.alumnos.push(this.nuevoAlumno.Nombre);
    this.nuevoAlumno.Nombre = '';
    this.nuevoAlumno.Presente = false;
  }
}
