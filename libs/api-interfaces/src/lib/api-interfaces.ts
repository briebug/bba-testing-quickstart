export interface BaseEntity {
  id: string | null;
  title?: string | null;
}

export interface Login {
  email: string;
  password: string;
}

export interface Course extends BaseEntity {
  title: string;
  description: string;
}

export interface Lesson extends BaseEntity {
  title: string;
  description: string;
  course_id: any;
}

export interface User extends BaseEntity {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
