import { Component, OnInit } from '@angular/core';
import { StudentService } from './../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: any;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentList().subscribe(response=>{
      console.log('Student list', response);
      this.studentList = response;
    });
  }

}
