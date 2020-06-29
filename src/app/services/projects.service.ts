import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectsModel } from './../models/projects.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjectsList() {
    return this.http.get<ProjectsModel[]>('../../assets/data/projectList.json');
  }
}
