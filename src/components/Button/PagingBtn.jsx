import usePaging from "../../hooks/usePaging";

function PagingBtn({isNextPage,setIsNextPage}) {
  
  const { nextPageHandler, prevPageHandler } = usePaging(
    isNextPage,
    setIsNextPage
  );
  return (
    <div className="paging-btn">
      <button className="paging-btn__prev" onClick={prevPageHandler}>
        &lt;
      </button>
      <button className="paging-btn__next" onClick={nextPageHandler}>
        &gt;
      </button>
    </div>
  );
}

export default PagingBtn