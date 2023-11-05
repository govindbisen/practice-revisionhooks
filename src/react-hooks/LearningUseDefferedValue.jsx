import { Suspense, useDeferredValue, useState } from 'react';
import SearchResults from '../Pages/SearchResults';
// useDeferredValue is a React Hook that lets you defer updating a part of the UI.
export default function LearningUseDefferedValue() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <div
          style={{
            opacity: query !== deferredQuery ? 0.5 : 1,
          }}
        >
          <SearchResults query={deferredQuery} />
        </div>
      </Suspense>
    </>
  );
}
