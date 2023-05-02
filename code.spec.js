const { func } = require('./code');

describe(`code`, () => {
  it(`func if 1`, () => {
    expect(func({})).toEqual(true);
  });
  it(`func else`, () => {
    expect(func({ arr: ['a'] })).toEqual(false);
  });
});
