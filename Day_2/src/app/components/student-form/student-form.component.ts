import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule , CommonModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  studentName:string='Nirav';
  submitted: boolean = false;
  student: string[]=[];

  submitForm(){
    this.student.push(this.studentName);
    this.submitted=true;
    this.studentName='';
    console.log(this.student);
  }
}
