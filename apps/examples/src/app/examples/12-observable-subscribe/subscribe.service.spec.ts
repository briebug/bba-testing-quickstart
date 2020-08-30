import { Playlist, SubscribeService, Video } from './subscribe.service';

// -------------------------------------------------------------------
// CHALLENGE:
// Use the subscribe and assert approach to get both tests passing
// The first test is testing for a single value emission
// The second test is testing for a mutli-value emission
// -------------------------------------------------------------------
describe('SubscribeService', () => {
  let service: SubscribeService;
  const firstVideo = { title: 'Video 01', duration: 1000 };
  const secondVideo = { title: 'Video 02', duration: 3000 };
  const thirdVideo = { title: 'Video 03', duration: 5000 };
  const fourthVideo = { title: 'Video 04', duration: 8000 };

  beforeEach(() => (service = new SubscribeService()));

  it('should properly filter a playlist based on duration', (done) => {
    // Finish this test
  });

  it('should properly filter a monitored playlist based on duration', (done) => {
    // Finish this test
  });
});
