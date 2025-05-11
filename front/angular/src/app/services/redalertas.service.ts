import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Alerta } from "../model/Alerta";

const API_URL = "https://api.redalertas.com/api";
const API_ALERTS ="Alerts/all"; //{tipo} = 1,2,3,4,5,6,7,8,9,10
//const API_LOGIN = "login";

@Injectable({
    providedIn: 'root'
  })
  export class RedAlertasService {
    private http = inject(HttpClient);

    // getAlerts(tipo:number):Observable<Alerta[]>{
    //   console.log("url:" + `${API_URL}/${API_ALERTS}?tipoAlerta=${tipo}`);
    //   return this.http.get<Alerta[]>(`${API_URL}/${API_ALERTS}?tipoAlerta=${tipo}`);
    // }

  getAlerts(tipo:number): Observable<Alerta[]> {
    return this.http.get<{error: boolean, mensaje: string | null, data: any[]}>(`${API_URL}/${API_ALERTS}?tipoAlerta=${tipo}`).pipe(
      map(response => response.data.map(item => new Alerta(
        item.fecha,
        item.titulo,
        item.url,
        item.descripcion || ''
      )))
    );
  }
    // doLogin():Observable< {
    //   return this.http.post(`${API_URL}/${API_LOGIN}`, {
    //     username: 'admin',
    //     password: 'admin'
    //   });
    // }   


  }