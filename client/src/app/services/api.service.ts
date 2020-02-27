import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../models/contact';

const SAMPLE_URL = 'http://localhost:3000/api/contacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public getContacts() {
    return this.http.get<Contact[]>(SAMPLE_URL);
  }
}
