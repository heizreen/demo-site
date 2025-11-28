import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleForm {

  private scriptURL = "https://script.google.com/macros/s/AKfycbyZUMJDm_VZSf7542eUJUJB-GBP2lGMTU4aqrP8V1_2wg_8TEKK9N6rtBeUNlD9PN6oUQ/exec"; // paste URL here

  constructor(private http: HttpClient) {}

  submit(data: any) {
    return this.http.post(this.scriptURL, data, {
      responseType: 'text'
    });
  }
}
