"use client";
import React, { useState, useEffect, Suspense } from 'react';
import Loading from './components/loading';

interface Story {
    title: string;
    abstract: string;
    url: string;
    media: {
        "media-metadata": {
            url: string;
        }[];
    }[];
}

const NYTimesPage = () => {
    const [stories, setStories] = useState<Story[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.NEXT_PUBLIC_NYTIMES_API_KEY}`
            );
            const data = await response.json();
            console.log(data.results);
            setStories(data.results);
        };
        fetchData();
    }, []);

    return (
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="border rounded-lg m-2 shadow-lg overflow-hidden">
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">Kim-bhoh</h2>
              <p className="mb-4"></p>
            </div>
          </div>
          {stories &&
            stories.map((story, index) => (
              <div
                key={index}
                className="border rounded-lg m-2 shadow-lg overflow-hidden"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${story.media[0]["media-metadata"][2].url})`,
                  }}
                />
                <div className="p-4">
                  <h2 className="font-bold text-xl mb-2">{story.title}</h2>
                  <p className="mb-4">{story.abstract}</p>
                  {/* <a href={story.url} className="text-blue-500 hover:underline">
                    Read more
                  </a> */}
                </div>
              </div>
            ))}
        </div>
      </Suspense>
    );
}

export default NYTimesPage;