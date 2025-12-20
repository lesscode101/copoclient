

// ---------------- RATING STARS COMPONENT ----------------
interface RatingStarsProps {
    average: number; // e.g. 4.5
    count: number; // e.g. 2 reviews
  }
  

export const RatingStars: React.FC<RatingStarsProps> = ({ average, count }) => {
    const fullStars = Math.floor(average);
    const hasHalf = average % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  
    const StarSVG = () => (
      <svg viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.431L23.6 9.75l-5.8 5.65L19.6 24 12 20 4.4 24l1.8-8.6L.4 9.75l7.932-1.732z" />
      </svg>
    );
  
    return (
      <div className="product-rating" aria-label={`Rating: ${average} out of 5`}>
        <div className="stars" aria-hidden="true">
          {Array.from({ length: fullStars }).map((_, i) => (
            <span className="star active" key={`full-${i}`}>
              <StarSVG />
            </span>
          ))}
  
          {hasHalf && (
            <span className="star" key="half">
              <StarSVG />
              <div className="mask">
                <span className="star-half">
                  <StarSVG />
                </span>
              </div>
            </span>
          )}
  
          {Array.from({ length: emptyStars }).map((_, i) => (
            <span className="star" key={`empty-${i}`}>
              <StarSVG />
            </span>
          ))}
        </div>
  
        <div className="rating-text">
          <strong className="rating-number">{average.toFixed(1)}</strong>
          <span className="rating-max">/5</span>
          <span className="sep">|</span>
          <a href="#reviews" className="reviews-link">
            {count} reviews
          </a>
        </div>
      </div>
    );
  };
  