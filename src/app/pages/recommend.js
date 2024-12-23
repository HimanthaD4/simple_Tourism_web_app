import { useState } from 'react';

const Recommend = () => {
  const [recommendationText, setRecommendationText] = useState('');
  const [userId, setUserId] = useState(1); 
  const [destinationId, setDestinationId] = useState(1); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/recommendations', {
      method: 'POST',
      body: JSON.stringify({ user_id: userId, destination_id: destinationId, recommendation_text: recommendationText }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Recommendation submitted:', data);
    } else {
      console.error('Error submitting recommendation:', data);
    }
  };

  return (
    <div>
      <h1>Submit a Recommendation</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={recommendationText}
          onChange={(e) => setRecommendationText(e.target.value)}
          placeholder="Write your recommendation"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Recommend;
