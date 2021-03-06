import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu';
import { Globalvariable } from '../app_classes/globalvariable';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private httpClient: HttpClient) { }
  path = Globalvariable.apiurl;

  getMenu(): Observable<Menu[]> {
    
    return this.httpClient.get<Menu[]>(this.path + "menu");
   
  }


}
