import { useEffect, useState } from 'react';

function APIList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const filtered = data.filter(post => post.title.includes(search));

  return (
    <div>
      <input
        className="border p-2 mb-4"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? <p>Loading...</p> :
        error ? <p>Error loading data</p> :
        <ul>
          {filtered.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      }
    </div>
  );
}

export default APIList;
