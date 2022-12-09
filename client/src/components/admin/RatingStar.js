import React, { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingStar = ({ className, rating, onRating, disabled = false }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const getColor = (index) => {
    if (hoverRating >= index) return "yellow";
    else if (!hoverRating && rating >= index) return "yellow";
    return "gray";
  };

  const starRating = useMemo(() => {
    return Array(5)
      .fill(0)
      .map((_, i) => i + 1)
      .map(
        (idx) => (
          <FaStar
            key={idx}
            className="cursor-pointer"
            onClick={() => (!disabled ? onRating(idx) : <></>)}
            style={{ color: getColor(idx), width: "30px", height: "30px" }}
            onMouseEnter={() => (disabled ? <></> : setHoverRating(idx))}
            onMouseLeave={() => (disabled ? <></> : setHoverRating(0))}
          />
        ),
        [rating, hoverRating]
      );
  });

  return <div className={className}>{starRating}</div>;
};

export default RatingStar;
