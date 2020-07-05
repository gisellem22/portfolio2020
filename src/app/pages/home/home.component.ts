import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../../services/projects.service';
import { ProjectsModel } from './../../models/projects.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: ProjectsModel[];
  loading = false;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    // nextArrow: '<div class=\'nav-btn next-slide\'></div>',
    // prevArrow: '<div class=\'nav-btn prev-slide\'></div>',
    dots: true,
  };

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.getProjectsList().subscribe(projects => {
      this.projects = projects;
      this.loading = true;
    });
  }

}
