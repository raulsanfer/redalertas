import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

const API_URL = "https://api.redalertas.com/api";
const API_LOGIN ="user/token";

@Injectable({
    providedIn: 'root'
  })
  export class RedAlertasService {
    private http = inject(HttpClient);

    doLogin(userName:string, pass: string):Observable<> {
      return this.http.post(`${API_URL}/${API_LOGIN}`, {
        username: userName,
        password: pass
      });
    }   

  }