```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using an arrow function without a return statement
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setCount(data.count));
  }, []);

  return <div>Count: {count}</div>;
}
```