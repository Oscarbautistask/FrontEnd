import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipos} from '../../Models/equipos/equipos.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private urlAPI='https://jsonplaceholder.typicode.com/todos'
  constructor(private http: HttpClient) { }

  getAllEquipos ():Observable<Equipos[]>{
    return this.http.get<Equipos[]>(this.urlAPI)
  }


}
