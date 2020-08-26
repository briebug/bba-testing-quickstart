import { Component, OnInit } from '@angular/core';
import { Course, Lesson, User } from '@bba/api-interfaces';
import { CoursesFacade, LessonsFacade, UsersFacade } from '@bba/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'bba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courses$: Observable<Course[]> = this.coursesFacade.allCourses$;
  lessons$: Observable<Lesson[]> = this.lessonsFacade.allLessons$;
  users$: Observable<User[]> = this.usersFacade.allUsers$;

  constructor(
    private coursesFacade: CoursesFacade,
    private lessonsFacade: LessonsFacade,
    private usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.coursesFacade.loadCourses();
    this.lessonsFacade.loadLessons();
    this.usersFacade.loadUsers();
  }
}
