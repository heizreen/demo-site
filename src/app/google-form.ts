import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleForm {

  private scriptURL = "https://script.google.com/macros/s/AKfycbzUDaJontQFk-BMiCM8LQLf6wTuvFa95_YbeA5VL7Ls1YAeSv1H0em7eQ4ubOr_r44j3A/exec"; // paste URL here

  constructor(private http: HttpClient) {}

  submit(data: any) {
    return this.http.post(this.scriptURL, data, {
      responseType: 'text'
    });
  }
}
