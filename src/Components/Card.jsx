import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  const readMore = (url) => {
    window.open(url);
  };

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {data.map((item, index) => {
        if (!item.urlToImage) {
          return null;
        } else {
          return (
            <div
              key={index}
              class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between transform transition hover:scale-105 duration-300"
            >
              <img
                src={item.urlToImage}
                alt=""
                class="w-full h-48 object-cover"
              />
              <div class="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <a
                    onClick={() => {
                      readMore(item.url);
                    }}
                    href="#"
                    class="text-xl font-semibold hover:text-indigo-600 transition"
                  >
                    {item.title}
                  </a>
                  <p class="text-gray-600 mt-2 text-sm">{item.description}</p>
                </div>
                <div class="mt-4">
                  <button
                    onClick={() => {
                      readMore(item.url);
                    }}
                    class="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition w-full"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
