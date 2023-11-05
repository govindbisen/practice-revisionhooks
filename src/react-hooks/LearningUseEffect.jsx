import { useEffect, useState } from 'react';

function LearningUseEffect() {
  const [resourceType, setResourceType] = useState('comments');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [items, setItems] = useState([]);
  console.log({ resourceType });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((res) => setItems(res));

    return () =>
      console.log(
        'cleanup is run directly before the side effect is run as long as the side effect has occurred at least once.'
      );
  }, [resourceType]);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <>
      <div>Window Width: {windowWidth}</div>
      <div>
        <button onClick={() => setResourceType('posts')}>post</button>
        <button onClick={() => setResourceType('comments')}>comment</button>
      </div>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <p>{item.name && item.name} </p>
            <p> {item.title && item.title}</p>
            {}
          </div>
        ))}
      </div>
    </>
  );
}

export default LearningUseEffect;
