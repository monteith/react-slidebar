import { assignUuids } from './assignUuids';

describe('assignUuids.js', () => {
  it('should return an object of the same structure', () => {
    const fakeObject = {
      name: '1',
      children: [
        ...Array.from(new Array(3)).map((item, index) => ({
          name: `${index}`,
          children: [
            ...Array.from(new Array(3)).map((item, index) => ({
              name: `${index}`,
            })),
          ],
        })),
      ],
    };

    const fakeObjectWithUuid = assignUuids(fakeObject);

    expect(fakeObjectWithUuid).toMatchObject({
      name: '1',
      children: [
        {
          name: '0',
          children: [
            {
              name: '0',
            },
            {
              name: '1',
            },
            {
              name: '2',
            },
          ],
        },
        {
          name: '1',
          children: [
            {
              name: '0',
            },
            {
              name: '1',
            },
            {
              name: '2',
            },
          ],
        },
        {
          name: '2',
          children: [
            {
              name: '0',
            },
            {
              name: '1',
            },
            {
              name: '2',
            },
          ],
        },
      ],
    });
  });

  it('should return a matching object with UUIDs', () => {
    const uuidRegex = /[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-4[a-zA-Z0-9]{3}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}/;
    const fakeObject = {
      name: '1',
      children: [
        ...Array.from(new Array(3)).map((item, index) => ({
          name: `${index}`,
          children: [
            ...Array.from(new Array(3)).map((item, index) => ({
              name: `${index}`,
            })),
          ],
        })),
      ],
    };

    const fakeObjectWithUuid = assignUuids(fakeObject);

    expect(fakeObjectWithUuid).toMatchObject({
      uuid: expect.stringMatching(uuidRegex),
      children: [
        {
          uuid: expect.stringMatching(uuidRegex),
          children: [
            {
              uuid: expect.stringMatching(uuidRegex),
            },
            {
              uuid: expect.stringMatching(uuidRegex),
            },
            {
              uuid: expect.stringMatching(uuidRegex),
            },
          ],
        },
        {
          uuid: expect.stringMatching(uuidRegex),
          children: [
            {
              uuid: expect.stringMatching(uuidRegex),
            },
            {
              uuid: expect.stringMatching(uuidRegex),
            },
            {
              uuid: expect.stringMatching(uuidRegex),
            },
          ],
        },
        {
          uuid: expect.stringMatching(uuidRegex),
          children: [
            {
              uuid: expect.stringMatching(uuidRegex),
            },
            {
              uuid: expect.stringMatching(uuidRegex),
            },
            {
              uuid: expect.stringMatching(uuidRegex),
            },
          ],
        },
      ],
    });
  });
});
