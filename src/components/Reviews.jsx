import './Reviews.css'		
import { useState } from 'react';
import Icon from './icon';


export default function Reviews() {
	const [reviews, setReviews] = useState([])
	const [newReview, setNewReview] = useState('')
	const [newRating, setNewRating] = useState(null)
	const [reviewerName, setReviewerName] = useState('');
	const [isFormAddReview, setIsFormAddReview] = useState(false)
	const [alertMessage, setIsAlertMessage] = useState('')
	const [hoveredStar, setHoveredStar] = useState(null);

 
	const handleAddReview = () => {
		if (!newRating) {
      setIsAlertMessage('Будь ласка, залиште оцінку');
      return;
    }
		setReviews(prev => [...prev, {
			name: reviewerName.trim() || 'Анонім',
			rating: newRating,
			review: newReview.trim() || null,
			date: now
	}
]
)
 		setNewReview('');
    setNewRating(null);
    setReviewerName('');
    setIsFormAddReview(false);
	}


	return(
		<div className="reviews-wrapper">
			<div className="reviews-heading">
				<h2>Відгуки клієнтів</h2>
				<button  
				className="add-review-btn"
				onClick={() => setIsFormAddReview(true)}
				><span>+</span></button>
				</div>
				{isFormAddReview && (
        <div className="review-form-wrapper">
					<div className='review-form-heading'>
						<h2>Залишити відгук</h2>
						<Icon 
						name='close' 
						size={16}
						onClick = {() => setIsFormAddReview(false)}
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
						<span>Поставте оцінку:</span>
						<div className="rating-stars">
  						{[1, 2, 3, 4, 5].map((star) => (
    						<span 
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
						</div>
					<textarea
            placeholder="Коментар"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <button onClick={handleAddReview}>ЗАЛИШИТИ ВІДГУК</button>
        </form>
				</div>
      )}
				<div className='reviews'>
					{reviews.map((r, i) => (
    			<div key={i} className="review-item">
      		<div className="review-name">{r.name}</div>
      		<div className="review-rating">{'⭐'.repeat(r.rating)}</div>
      		{r.review && <div className="review-comment">{r.review}</div>}
    			</div>
  			))}
				</div>
		</div>
	)
} 


