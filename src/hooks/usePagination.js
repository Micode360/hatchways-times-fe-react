export const DOTS = "...";

function usePagination({
  currentPage,
  totalCount,
  pageSize,
  currentPageDataLength,
}) {
  const numberOfPages = totalCount / pageSize;
  const hasDecimals = totalCount % pageSize;
  const lastPageNumber =
    hasDecimals !== 0 ? parseInt(numberOfPages, 10) + 1 : numberOfPages;

  if (currentPageDataLength === 0)
    return [
      1,
      DOTS,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      DOTS,
      lastPageNumber,
    ];

  if (lastPageNumber - currentPage === 0 || lastPageNumber - currentPage < 0)
    return [
      1,
      DOTS,
      lastPageNumber - 2 <= 1 ? DOTS : lastPageNumber - 2,
      lastPageNumber - 1,
      lastPageNumber,
    ];

  if (lastPageNumber - currentPage === 1 || lastPageNumber - currentPage < 1)
    return [
      1,
      DOTS,
      currentPage - 2 < 1 ? DOTS : currentPage - 1,
      currentPage,
      lastPageNumber,
    ];

  if (currentPage > 2)
    return [
      1,
      DOTS,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      DOTS,
      lastPageNumber,
    ];

  return [
    1,
    2,
    lastPageNumber - currentPage <= 1 ? DOTS : 3,
    DOTS,
    lastPageNumber,
  ];
}

export default usePagination;
