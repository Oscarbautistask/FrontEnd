import { Component, OnInit } from '@angular/core';
import { DataService } from '../list/data.service';
import { Equipos } from '../../Models/equipos/equipos.interface';

@Component({
  selector: 'app-index-equipos',
  templateUrl: './index-equipos.component.html',
  styleUrls: ['./index-equipos.component.scss']
})

export class IndexEquiposComponent implements OnInit {
  equipos: Equipos[];

  constructor(private dataSvc: DataService) { }

  ngOnInit() {

    //this.dataSvc.getAllEquipos().subscribe(data => console.log(data))
    this.dataSvc.getAllEquipos().subscribe(data => (this.equipos = data))
  }

}
