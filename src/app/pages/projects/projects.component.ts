import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public loading: boolean = true;

  constructor() { 
  }

  ngOnInit() {}

  onLoad() {
    this.loading = false;
  }
  }
