import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CourseserService {

  constructor(private http:HttpClient) { }
  addcourses(item:any){
    return this.http.post<any>('http://localhost:3000/addcourse',item)
  }
}
