import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  subjects;
  constructor(private http: HttpClient) { 
    this.getJSON().subscribe(data => {
      this.subjects = data["Subjects"]
  });
  }
  public getJSON(): Observable<any> {
    return this.http.get("../../../assets/subs.json");
  }

  public getSubjects() {
    return this.subjects;
  }
}
