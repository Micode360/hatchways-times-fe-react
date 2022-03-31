export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {
  const numberOfPages = Math.ceil(totalCount / pageSize);

  if (numberOfPages === 3) return [1, 2, 3];

  if (numberOfPages === 2) return [1, 2];

  if (numberOfPages === 1) return [1];

  if (
    numberOfPages - currentPage === 0 ||
    numberOfPages - currentPage < 0 ||
    numberOfPages - currentPage === 1 ||
    numberOfPages - currentPage < 1
  )
    return [
      1,
      DOTS,
      numberOfPages - 2 <= 1 ? DOTS : numberOfPages - 2,
      numberOfPages - 1,
      numberOfPages,
    ];

  if (currentPage > 2)
    return [
      1,
      DOTS,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      DOTS,
      numberOfPages,
    ];

  return [
    1,
    2,
    numberOfPages - currentPage <= 1 ? DOTS : 3,
    DOTS,
    numberOfPages,
  ];
}

export default usePagination;
