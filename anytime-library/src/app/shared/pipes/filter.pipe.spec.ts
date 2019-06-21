import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return original array if no filter text is given', () => {
    const pipe = new FilterPipe();
    const data = [{name: 'Dave'}, {name: 'Jon'}];
    const result = pipe.transform(data, null, 'name');
    expect(result.length).toEqual(data.length);
  });

  it('should filter an array by property name', () => {
    const pipe = new FilterPipe();
    const data = [{name: 'Dave'}, {name: 'Jon'}];
    const result = pipe.transform(data, 'd', 'name');
    expect(result.length).toEqual(1);
  });

  it('should filter an array by property "averageRating"', () => {
    const pipe = new FilterPipe();
    const data = [{averageRating: '3.5'}, {averageRating: '4.2'}];
    const result = pipe.transform(data, '4', 'averageRating');
    expect(result.length).toEqual(1);
  });
});
