import { useState, useEffect } from "react";

// Define a custom React hook for interacting with localStorage
export function useLocalStorage(key, initialValue) {
  // Use the useState hook to manage the state value and a function to update it
  const [value, setValue] = useState(() => {
    // When the component is first rendered, try to get the stored value from localStorage
    const jsonValue = localStorage.getItem(key);

    // If a stored value exists, parse it from JSON and use it as the initial state
    if (jsonValue !== null) return JSON.parse(jsonValue);

    // If there is no stored value, use the provided initialValue
    // If initialValue is a function, call it to get the initial value
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  // Use the useEffect hook to update localStorage whenever the key or value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Return an array with the current value and the function to update it
  return [value, setValue];
}
