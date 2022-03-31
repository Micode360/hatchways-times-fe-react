export const DOTS = "...";

function usePagination({
  currentPage,
  totalCount,
  pageSize,
  currentPageDataLength,
}) {
  if (currentPageDataLength === 0) {
    return [
      1,
      DOTS,
      currentPage - 3 < 1 ? DOTS : currentPage - 1,
      currentPage - 2,
      currentPage - 1,
    ];
  }

  if (currentPageDataLength < pageSize) {
    return [
      1,
      DOTS,
      currentPage - 2 < 1 ? DOTS : currentPage - 2,
      currentPage - 1,
      currentPage,
    ];
  }
  if (totalCount - currentPageDataLength * 3 < pageSize) {
    return [
      1,
      DOTS,
      currentPage - 2 < 1 ? DOTS : currentPage - 1,
      currentPage,
      currentPage + 1,
    ];
  }

  if (currentPage > 2)
    return [
      1,
      DOTS,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      DOTS,
      totalCount,
    ];

  return [1, 2, 3, DOTS, totalCount];
}

export default usePagination;
