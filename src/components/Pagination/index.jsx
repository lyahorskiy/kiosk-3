import ReactPaginate from 'react-paginate'
import styles from './pagination.module.scss'

const Pagination = ({ onChangePage }) => {
  return (
    <div>
      {' '}
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={12}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </div>
  )
}
export default Pagination
