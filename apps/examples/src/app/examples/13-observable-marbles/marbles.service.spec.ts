import { cold } from '@nrwl/angular/testing';
import { MarblesService, Playlist } from './marbles.service';

// -------------------------------------------------------------------
// CHALLENGE:
// Use marbles to get both tests passing
// The first test is testing for a single value emission
// The second test is testing for a mutli-value emission
// -------------------------------------------------------------------
describe('MarblesService', () => {
  let service: MarblesService;
  const firstVideo = { title: 'Video 01', duration: 1000 };
  const secondVideo = { title: 'Video 02', duration: 3000 };
  const thirdVideo = { title: 'Video 03', duration: 5000 };
  const fourthVideo = { title: 'Video 04', duration: 8000 };

  beforeEach(() => (service = new MarblesService()));

  it('should properly filter a monitored playlist based on duration', () => {
    const duration = 3000;
    const playlist: Playlist = {
      videos: [firstVideo, secondVideo, thirdVideo, fourthVideo],
    };
    const filteredVideos = [secondVideo, thirdVideo, fourthVideo];
    const response = service.filterByDuration(playlist, duration);
    // Finish this test
  });

  it('should properly filter a monitored playlist based on duration', () => {
    const duration = 3000;
    const playlist: Playlist = {
      videos: [firstVideo, secondVideo, thirdVideo, fourthVideo],
    };
    const response = service.monitorByDuration(playlist, duration);
    // Finish this test
  });
});
