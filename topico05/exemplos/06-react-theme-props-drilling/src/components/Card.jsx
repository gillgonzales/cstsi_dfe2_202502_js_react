
export function Card({ count, setCount, theme }) {
  return (
    <div className={`card ${theme}`}>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}
