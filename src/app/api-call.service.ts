import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }
getSuggestions(Data){
  return this.http.post('http://127.0.0.1:5000/api/analyze',Data)
}
}
