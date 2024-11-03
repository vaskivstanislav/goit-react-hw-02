import s from './Feedback.module.css';

const Feedback = ({ comment, totalFeedback, positiveFeedback }) => {
  return (
    <div className='section'>
      <ul className={s.commentResaltList}>
        <li>
          <p>Good: {comment.good}</p>
        </li>
        <li>
          <p>Neutral: {comment.neutral}</p>
        </li>
        <li>
          <p>Bad: {comment.bad}</p>
        </li>
        <li>
          <p>Total: {totalFeedback}</p>
        </li>
        <li>
          <p>Positive: {positiveFeedback}%</p>
        </li>
      </ul>
    </div>
  );
};
export default Feedback;