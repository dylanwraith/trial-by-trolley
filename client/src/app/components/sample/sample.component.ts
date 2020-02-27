import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  contactList: Contact[];

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  getContacts() {
    this.api.getContacts().pipe().subscribe(data => {
      this.contactList = data;
    });
  }

}
