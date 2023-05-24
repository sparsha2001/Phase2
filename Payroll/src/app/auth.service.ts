import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string = "https://localhost:44348/api/admins/";
  constructor(private  http: HttpClient) { }

  login(loginObj: any){
    return this.http.post<any>(`${this.baseUrl}authenticate'`,loginObj);
    //return this.http.post<any>(this.baseUrl + 'authenticate',loginObj);
    }
}