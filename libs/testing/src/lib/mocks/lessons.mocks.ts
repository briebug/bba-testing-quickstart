import { Lesson } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockLessonsFacade = {
  loadLessons: () => {},
  selectLesson: () => {},
  deleteLesson: () => {},
  updateLesson: () => {},
  createLesson: () => {},
  mutations$: of(true),
};

export const mockLessonsService = {
  all: () => of([]),
  find: () => of({ ...mockLesson }),
  create: () => of({ ...mockLesson }),
  update: () => of({ ...mockLesson }),
  delete: () => of({ ...mockLesson }),
};

export const mockLesson = {
  id: '0',
  title: 'mock',
  description: 'mock',
  course_id: 'mock',
};

export const mockEmptyLesson = {
  id: null,
  title: 'mockEmpty',
  description: 'mockEmpty',
  course_id: 'mockEmpty',
};
