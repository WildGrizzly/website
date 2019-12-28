import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Observable } from 'rxjs';
import { * } from '../../../assets/subs.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  subjects = subjects;
  constructor(private http: HttpClient) { 
  }

  public getSubjects() {
    return this.subjects;
  }
}
