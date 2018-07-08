import List from '../List';
import { GET_LINKS } from '../../queries';
import setupMockedContainer from '../../../tests/test-setup';

describe('List', () => {
  it('render id and description for each list item', async () => {
    // expect.assertions(2); // Use if using promises with Jest, not always needed
    const stubId = 1;
    const stubDesc = 'some desc';
    const stubData = {
        allLinks: [
          {
            __typename: 'List',
            id: stubId,
            url: 'some-url',
            description: stubDesc
          }
        ]
    }
      const wrapped = await setupMockedContainer(List, GET_LINKS, stubData);

      expect(wrapped.find('.list-item').length).toBe(1);
      expect(wrapped.find('.list-item').text()).toBe(`X- ${stubId} - ${stubDesc}`);

    })
});
