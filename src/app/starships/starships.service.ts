import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';

import { StarshipResponse } from './starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {


  constructor(private http: HttpClient) { }

  get starships(): Observable<StarshipResponse> {
    return this.http.get<StarshipResponse>("/starships");
  }

}
