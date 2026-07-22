import { useState, useEffect } from "react";

const UseEffectPractice = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [timer, setTimer] = useState(0);
  const [fetchData, setFetchData] = useState([]);

  // Task 1 - Counter
  useEffect(() => {
    console.log("Increased:", count);
  }, [count]);

  // Task 2 - Page Title Updater
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    document.title = `Welcome ${name}`;
  }, [name]);

  // Task 3 - Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Task 4 - Fetch API
  useEffect(() => {

    const getData = async () => {

      const response = await fetch("https://dummyjson.com/products");

      const data = await response.json();

      console.log(data);

      setFetchData(data.products);

    };

    getData();

  }, []);

  return (
    <>
      {/* Task 1 */}
      <div>
        <h1>Task 1 - Counter</h1>

        <h2>Count: {count}</h2>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>

      <hr />

      {/* Task 2 */}
      <div>
        <h1>Task 2 - Page Title Updater</h1>

        <input
          type="text"
          value={name}
          placeholder="Enter User Name"
          onChange={handleNameChange}
        />
      </div>

      <hr />

      {/* Task 3 */}
      <div>
        <h1>Task 3 - Timer</h1>

        <h2>Timer: {timer}</h2>
      </div>

      <hr />

      {/* Task 4 */}
      <div>
        <h1>Task 4 - Fetch API</h1>

        {fetchData.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UseEffectPractice;