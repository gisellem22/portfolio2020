import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ProjectsModel } from './../../models/projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectsModel[];
  loading = false;

  constructor(
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.projectsService.getProjectsList().subscribe((projects => {
      console.log(projects);
      this.projects = projects;
      this.loading = true;
    }));
  }
  }
