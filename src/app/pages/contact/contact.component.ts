import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from './../../components/footer/footer.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild(FooterComponent, { static: true }) footerComponent: FooterComponent;



  public loading: boolean = true;

  constructor() { 
  }

  ngOnInit() {
    this.footerComponent.isFooter = false;

  }
  
  
  onLoad() {
    this.loading = false;
  }

  }
