# React useEffect Hook Cleanup Function

This repository demonstrates a common error in React applications involving the `useEffect` hook. The provided code shows an example of how to make a `useEffect` function correctly with a cleanup function. 

## Problem

The `bug.js` file contains a React component that fetches data using the `useEffect` hook. However, it doesn't include a cleanup function to cancel the fetch request if the component unmounts before the response is received. This could lead to memory leaks and unexpected behavior. 

## Solution

The `bugSolution.js` file demonstrates the correct way to use the `useEffect` hook with a cleanup function, preventing potential issues.