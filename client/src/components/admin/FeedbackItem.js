import React from "react";
import useDatabase from "../../hooks/useDatabase";
import DetailButton from "./DetailButton";

const FeedbackItem = ({ feedback }) => {
  const { drinks } = useDatabase();

  return (
    <tr style={{ verticalAlign: "middle", backgroundColor: "white" }}>
      <td>{feedback.userName}</td>
      <td>
        {drinks.map((drink) =>
          drink.id === feedback.drink ? (
            <div key={drink.id}>{drink.name}</div>
          ) : (
            <div key={drink.id}></div>
          )
        )}
      </td>
      <td>{feedback.comment}</td>
      <td>{feedback.rating}/5</td>
      <td>
        <DetailButton href={`${feedback.id}`} />
      </td>
    </tr>
  );
};

export default FeedbackItem;
