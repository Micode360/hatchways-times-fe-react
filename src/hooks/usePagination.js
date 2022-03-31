export const DOTS = "...";

function usePagination(/* { currentPage, totalCount, pageSize } */) {
  return [1, 2, 3, DOTS, 5];
}

export default usePagination;
