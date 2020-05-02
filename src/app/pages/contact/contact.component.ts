import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public loading: boolean = true;

  constructor() { 
  }

  ngOnInit() {}
  
  onLoad() {
    this.loading = false;
  }

  }
