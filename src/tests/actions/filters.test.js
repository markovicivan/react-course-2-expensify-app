import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters';

test('set start date', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('set end date', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate set text filter object with text value', () => {
  const text = 'Something in';
  const action = setTextFilter('Something in');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text 
  });
});

test('should generate set text filter object with default', () => {
  const text = '';
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text 
  });
});

test('sort by date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});


test('sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});
