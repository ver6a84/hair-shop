import './Reviews.css'
import { useState, useEffect,useRef } from 'react'
import Icon from './icon'
import { baseUrl } from '@/api'
import { useLocation } from 'react-router-dom';
import Pagination from './Pagination';



export default function Reviews({ product_id }) {
  const [reviews, setReviews] = useState([])
  const [newReview, setNewReview] = useState('')
  const [newRating, setNewRating] = useState(null)
  const [reviewerName, setReviewerName] = useState('')
  const [isFormAddReview, setIsFormAddReview] = useState(false)
  const [alertMessage, setIsAlertMessage] = useState('')
  const [hoveredStar, setHoveredStar] = useState(null)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)
	const location = useLocation();
  const reviewsRef = useRef(null);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 4;

  const sortedReviews = [...reviews].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  )

	const paginatedReviews = sortedReviews.slice(
  (currentPage - 1) * pageSize,
  currentPage * pageSize
	);

	const totalPages = Math.ceil(reviews.length / pageSize);

useEffect(() => {
    if (location.state?.scrollTo === 'reviews') {
      reviewsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => setIsAlertMessage(''), 1500)
      return () => clearTimeout(timer)
    }
  }, [alertMessage])

  useEffect(() => {
  if (product_id) {
    fetch(`${baseUrl}/comments?product_id=${product_id}`)
      .then(res => {
        if (!res.ok) throw new Error('Помилка завантаження')
        return res.json()
      })
      .then(data => setReviews(data.comments || []))
      .catch(err => {
        console.error('Помилка при завантаженні:', err)
        setReviews([])
      })
  }
	setCurrentPage(1);
}, [product_id])

useEffect(() => {
  reviewsRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [currentPage]);

  const handleAddReview = async () => {
  if (!newRating) {
    setIsAlertMessage('Будь ласка, оберіть рейтинг')
    return
  }

  try {
    const res = await fetch(`${baseUrl}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: reviewerName.trim() || 'Анонім',
        rating: newRating,
        review: newReview.trim() || null,
        product_id
      })
    })

    if (!res.ok) throw new Error('Помилка при додаванні коментаря')

    const updated = await fetch(`${baseUrl}/comments?product_id=${product_id}`)
    const data = await updated.json()
    setReviews(data.comments || [])

		setCurrentPage(1);
    setNewReview('')
    setNewRating(null)
    setReviewerName('')
    setIsFormAddReview(false)
    setIsAlertMessage('')
  } catch (err) {
    console.error(err)
    setIsAlertMessage('Щось пішло не так. Спробуйте ще раз.')
  }
}

  return (
    <div className="reviews-wrapper">
      <div className="reviews-heading">
        <h2>Відгуки клієнтів</h2>
        <div
          className="add-review-btn"
          title="Додати відгук"
          onClick={() => setIsFormAddReview(true)}
        >
          {isDesktop ? 'ЗАЛИШИТИ ВІДГУК' : <Icon name="plus" style={{ fill: '#fff' }} />}
        </div>
      </div>

      {isFormAddReview && (
        <div className="review-form-wrapper">
          <div className="review-form-heading">
            <h2>Залишити відгук</h2>
            <Icon
              className="close-review-form"
              name="close"
              size={16}
              onClick={() => setIsFormAddReview(false)}
            />
          </div>
          <form className="review-form">
            <input
              type="text"
              placeholder="Ваше ім’я"
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
            />
            <div className="rating">
              <span>Оберіть рейтинг:</span>
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    aria-label={`Оцінка ${star} з 5`}
                    role="button"
                    tabIndex={0}
                    className={`star ${star <= (hoveredStar || newRating) ? 'active' : ''}`}
                    key={star}
                    onClick={() => setNewRating(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(null)}
                  >
                    ★
                  </span>
                ))}
              </div>
              {alertMessage && <div className="alert-message">{alertMessage}</div>}
            </div>
            <textarea
              rows={4}
              placeholder="Коментар"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
            <button type="button" onClick={handleAddReview}>
              ЗАЛИШИТИ ВІДГУК
            </button>
          </form>
        </div>
      )}

      <div 
			ref={reviewsRef}
			id='reviews'
			className="reviews">
        {paginatedReviews.map((r, i) => (
          <div key={i} className="review-item">
            <div className="rating-name">
              <div className="reviews-name">{r.author}</div>
              <div className="rating-date">
                <div className="review-rating">{'⭐'.repeat(r.rating)}</div>
                <div className="review-date">
                  {new Date(r.created_at).toLocaleDateString('uk-UA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>
            {r.text && <div className="review-comment">{r.text}</div>}
          </div>
        ))}
				{reviews.length > pageSize && (
				<Pagination
				  currentPage={currentPage}
 					totalPages={totalPages}
  				onPageChange={setCurrentPage}
				/>)}
      </div>
    </div>
  )
}
