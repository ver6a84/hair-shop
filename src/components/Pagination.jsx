import './Pagination.css'
import Icon from './icon'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1)
  }

  return (
    <div className="pagination-wrapper">
      <div
        className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={handlePrev}
      >
        <Icon name="arrow_left" />
      </div>

      <div className="page-numbers">
  <div
    className={`page-number ${currentPage === totalPages ? '' : 'active'}`}
    onClick={() => onPageChange(currentPage === totalPages ? 1 : currentPage)}


  >
    {currentPage === totalPages ? 1 : currentPage}
  </div>

  <span className="page-separator">...</span>

  <div
    className={`page-number ${currentPage === totalPages ? 'active' : ''}`}
    onClick={() => onPageChange(totalPages)}
  >
    {totalPages}
  </div>
</div>


      <div
        className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={handleNext}
      >
        <Icon name="arrow_right" />
      </div>
    </div>
  )
}

