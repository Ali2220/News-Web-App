import React, { useEffect, useState } from 'react';
import Card from './Card';

const NewsApp = () => {
  const [search, setSearch] = useState('all');
  const [newsData, setNewsData] = useState();

  const API_KEY = '7befb347ea21476dab57be85d514650a';

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );

    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div class="min-h-screen bg-gray-100">
      <nav class="rounded-md bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-4 flex justify-between items-center text-white">
        <div>
          <h1 class="text-3xl font-bold">Trendy News</h1>
        </div>
        <ul class="flex space-x-4">
          <li>
            <a href="#" class="hover:underline">
              All News
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Trending
            </a>
          </li>
        </ul>
        <div class="searchBar flex items-center space-x-2">
          <input
            value={search}
            type="text"
            placeholder="Search News"
            class="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-300"
            onChange={handleInput}
          />
          <button
            onClick={getData}
            class="bg-white text-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-200 transition"
          >
            Search
          </button>
        </div>
      </nav>

      <div>
        <p className="font-semibold text-2xl my-5">
          Stay Update with Treding News
        </p>
      </div>

      <div class="categoryBtn mt-4 flex justify-center space-x-4">
        <button
          onClick={userInput}
          value="sports"
          class="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
        >
          Sports
        </button>
        <button
          onClick={userInput}
          value="politics"
          class="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
        >
          Politics
        </button>
        <button
          onClick={userInput}
          value="entertainment"
          class="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
        >
          Entertainment
        </button>
        <button
          onClick={userInput}
          value="fitness"
          class="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
        >
          Fitness
        </button>
        <button
          onClick={userInput}
          value="health"
          class="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
        >
          Health
        </button>
      </div>

      <div class="mt-8 mx-auto max-w-4xl">
        {newsData ? <Card data={newsData} /> : null}
      </div>
    </div>
  );
};

export default NewsApp;
