import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseserService } from '../courseser.service';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  submitted = false;
  constructor(private fb:FormBuilder, private router:Router,private courseservice:CourseserService) { }

  addcourse = this.fb.group({
    coursetitle:['tiya'],
    coursedecription:[''],
    coursename:[''],
    coursevenue:[''],
    courseduration:['']





  })
  onsubmit(values:any){
    this.submitted = true;
    console.log(values);
    this.courseservice.addcourses(this.addcourse.value)
    .subscribe((res) =>{
      alert('course sucessfully added')
    })


}
  ngOnInit(): void {
  }

}
