import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public loading = true;

  constructor(
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.projectsService.getProjectsList().subscribe((projects => {
      console.log(projects);
    }))
  }

  onLoad() {
    this.loading = false;
  }
  }
