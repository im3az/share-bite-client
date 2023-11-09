import React from "react";

const News = () => {
  return (
    <section className="p-8 lg:p-8 bg-gray-100 text-gray-800">
      <h2 className="text-center font-bold text-4xl lg:text-5xl text-[#F017B8] my-20">
        Get<span className="text-[#4BACBF]"> Involved </span>
      </h2>
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://i.ibb.co/7yYcK6T/priscilla-du-preez-W3-SEy-ZODn8-U-unsplash.jpg"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Join, it's free
            </span>
            <h3 className="text-3xl font-bold">Sign up as a community group</h3>
            <p className="my-6 text-gray-600">
              ShareBIte works with a network of more than 600 Irish Community
              Organizations. Join us.
            </p>
            <button className="self-start btn btn-secondary">Join</button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/r2yYKvV/We-share-our-technology-and-expertise-with-other-food-banks.jpg"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Join, it's free
            </span>
            <h3 className="text-3xl font-bold">Use ShareBIte Technology</h3>
            <p className="my-6 text-gray-600">
              We share our technology and expertise with other food banks.
            </p>
            <button className="self-start btn btn-secondary">Join</button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://i.ibb.co/vBKWSVd/Volunteer-with-Food-Cloud.jpg"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Join, it's free
            </span>
            <h3 className="text-3xl font-bold">Volunteer with ShareBIte</h3>
            <p className="my-6 text-gray-600">
              Volunteers are essential in supporting our vision of a world where
              no good food goes to waste.
            </p>
            <button className="self-start btn btn-secondary">Join</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
