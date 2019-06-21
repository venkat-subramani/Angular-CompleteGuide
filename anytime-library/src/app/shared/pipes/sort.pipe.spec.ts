import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return original array if no property name is given', () => {
    const pipe = new SortPipe();
    const result = pipe.transform([], null, false);
    expect(result.length).toEqual(0);
  });

  it('should sort an array by property name', () => {
    const pipe = new SortPipe();
    const data = [{name: 'Dave'}, {name: 'Anna'}];
    const result = pipe.transform(data, 'name', false);
    expect(result[0].name).toEqual('Anna');
  });

  it('should sort an array by property name in reverse', () => {
    const pipe = new SortPipe();
    const data = [{name: 'Dave'}, {name: 'Anna'}];
    const result = pipe.transform(data, 'name', true);
    expect(result[1].name).toEqual('Anna');
  });

  it('should sort an array by "averageRating"', () => {
    const pipe = new SortPipe();
    const data = [{averageRating: '3.5'}, {averageRating: '4.2'}];
    const result = pipe.transform(data, 'averageRating', true);
    expect(result[0].averageRating).toEqual('4.2');
  });

  it('should sort an array as is', () => {
    const pipe = new SortPipe();
    const data = [{name: 'Anna'}, {name: 'Anna'}];
    const result = pipe.transform(data, 'name', true);
    expect(result[0].name).toEqual('Anna');
  });
});
