import {Input, Component, OnInit} from '@angular/core';
import { AlternarService } from '../services/alternar.service';

@Component({
  selector: 'app-diapositiva-header',
  templateUrl: './diapositiva-header.component.html',
  styleUrls: ['./diapositiva-header.component.css']
})
export class DiapositivaHeaderComponent implements OnInit {
  @Input() paquet!: any;
  banner!: string;
  perfil!: string;
  nombre!: string;
  descripcion!: string;
  localidad!: string;
  visible: boolean = false;
  

  constructor(private servicioAlternar: AlternarService) { 
  }

  modificar(){
    this.visible = false

    this.servicioAlternar.disparadorAlternar.emit({
      data:this.paquet,
    });
  }
  

  ngOnInit(): void {
    this.servicioAlternar.disparadorAlternar.subscribe(data => {
      //Checkea que sea el componente a modificar
      if(data["data"][2] == "BannerBtn"){
        this.paquet = data["data"];
        this.visible = this.paquet[0]
        this.paquet[0] = false
      }
    });
  }
}
