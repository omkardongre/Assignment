import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpressServiceService {

  private apiUrl = 'http://localhost:3000/form';

  constructor(private httpClient: HttpClient) { }

  submitFormData(fromData:any) : Observable<any> {
    return this.httpClient.post(this.apiUrl, fromData);
  }
}
