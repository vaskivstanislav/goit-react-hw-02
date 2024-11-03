import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import { useEffect, useState } from 'react';

function App() {
  const [comment, setComment] = useState(() => {
    if (window.localStorage.getItem('commentStatus')) {
      const feedbackLocal = window.localStorage.getItem('commentStatus');
      return JSON.parse(feedbackLocal);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = comment.good + comment.neutral + comment.bad;
  const positiveFeedback = Math.round(
    ((comment.good + comment.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    window.localStorage.setItem('commentStatus', JSON.stringify(comment));
  }, [comment]);

  const updateFeedback = feedbackType =>
    setComment(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));

  const ressetFeedback = () =>
    setComment({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        ressetFeedback={ressetFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback
          comment={comment}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
}

export default App;