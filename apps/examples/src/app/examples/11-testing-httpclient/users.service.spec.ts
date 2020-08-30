import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { mockUser } from '@bba/testing';
import { UsersService } from './users.service';

// -------------------------------------------------------------------
// CHALLENGE:
// Use HttpTestingController to complete the empty tests
// Complete the `afterEach` function call to check for outstanding tests
// -------------------------------------------------------------------
describe('UsersService', () => {
  let httpTestingController: HttpTestingController;
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UsersService);
  });

  afterEach(() => {
    // Finish this method
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      // Finish this test
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      // Finish this test
    });

    it('post(url, model) on service.create(model)', () => {
      // Finish this test
    });

    it('put(url(model.id), model) on service.update(model)', () => {
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      // Finish this test
    });
  });
});
