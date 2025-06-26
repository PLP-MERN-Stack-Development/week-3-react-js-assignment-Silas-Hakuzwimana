import { useEffect, useState } from 'react';

function APIList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const filtered = data.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <input
        className="border border-gray-300 dark:border-gray-600 rounded p-2 w-full mb-4 bg-white dark:bg-gray-800 text-black dark:text-white"
        placeholder="Search posts..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Error loading data.</p>}

      <ul className="space-y-2">
        {filtered.map((post) => (
          <li
            key={post.id}
            className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow"
          >
            <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default APIList;
