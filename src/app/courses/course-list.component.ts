import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '/assets/images/forms.png',
        price: 99.90,
        code: 'XPS-8932',
        duration: 120,
        rating: 4.4,
        releaseDate: 'December, 2, 2019'
      },
      {
        id: 2,
        name: 'Angular: Http',
        imageUrl: '/assets/images/http.png',
        price: 47.90,
        code: 'LKL-4921',
        duration: 80,
        rating: 3.1,
        releaseDate: 'January, 21, 2020'
      }
  ]
  }

}
