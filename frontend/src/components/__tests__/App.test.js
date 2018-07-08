import App from '../App';
import setupMockedContainer from '../../../tests/test-setup';

describe('App', () => {
  it('renders without crashing', async () => {
    const wrapped = await setupMockedContainer(App);
  
    expect(wrapped.find('.App-title').text()).toBe('Welcome to React');
  });
});
