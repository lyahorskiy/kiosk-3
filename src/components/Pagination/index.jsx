import ReactPaginate from 'react-paginate'
import styles from './pagination.module.scss'

const Pagination = () => {
  return (
    <div>
      {' '}
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => console.log(event)}
        pageRangeDisplayed={8}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </div>
  )
}
export default Pagination
