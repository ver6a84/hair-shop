import './Pagination.css'
import Icon from './icon'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
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
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1
          return (
            <div
              key={page}
              className={`page-number ${page === currentPage ? 'active' : ''}`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </div>
          )
        })}
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
