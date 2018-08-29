import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../SortTester';
import QuickSort from './QuickSort';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 209;
const NOT_SORTED_ARRAY_VISITING_COUNT = 209;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;
const EQUAL_ARRAY_VISITING_COUNT = 209;

describe('QuickSort', () => {
  it('should sort array', () => {
    // console.log(typeof new QuickSort().callbacks)
    SortTester.testSort(QuickSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(QuickSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(QuickSort);
  });

  it('should do not stable sorting', () => {
    SortTester.testSortStability(QuickSort);
  });

  /*
    it('should visit EQUAL array element specified number of times', () => {
      SortTester.testAlgorithmTimeComplexity(
        QuickSort,
        equalArr,
        EQUAL_ARRAY_VISITING_COUNT,
      );
    });
  
    it('should visit SORTED array element specified number of times', () => {
      SortTester.testAlgorithmTimeComplexity(
        QuickSort,
        sortedArr,
        SORTED_ARRAY_VISITING_COUNT,
      );
    });
  
    it('should visit NOT SORTED array element specified number of times', () => {
      SortTester.testAlgorithmTimeComplexity(
        QuickSort,
        notSortedArr,
        NOT_SORTED_ARRAY_VISITING_COUNT,
      );
    });
  
    it('should visit REVERSE SORTED array element specified number of times', () => {
      SortTester.testAlgorithmTimeComplexity(
        QuickSort,
        reverseArr,
        REVERSE_SORTED_ARRAY_VISITING_COUNT,
      );
    });
    //*/
});