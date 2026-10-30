import { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/8/comments')
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <section id="reviews" className="rounded-md border-2 border-l-8 border-green-900 bg-white p-5 shadow-md transition hover:shadow-xl">
      <h2 className="mb-3 border-b-2 border-blue-900 pb-1 text-2xl font-bold text-green-900">Відгуки попередніх роботодавців</h2>

      {comments.map((comment) => (
        <div key={comment.id} className="mb-3 rounded-md border border-green-900 p-3">
          <h3 className="font-bold text-blue-900">{comment.name}</h3>
          <p className="text-sm">{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </section>
  );
}

export default Reviews;