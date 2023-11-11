import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaService } from '../consulta.service';
import { FotoServiceService } from '../foto-service.service';


@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
})
export class ProductoDetalleComponent  implements OnInit {

  constructor(private ruta: ActivatedRoute, private consulta: ConsultaService) { }
  

  ngOnInit() {
    this.consultaProducto(this.IdProducto);
  }
  IdProducto: string = this.ruta.snapshot.params['id'];
  
  producto: any = {};
  
  consultaProducto(id: string){
    this.consulta.getProductoDetalle(id)
    .subscribe((resp:Object) => {
      console.log (resp);
      this.producto = resp as any
    });
  }
}
