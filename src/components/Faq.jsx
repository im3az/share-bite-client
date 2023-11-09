const Faq = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-20">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-bold sm:text-4xl">
          <span className="text-[#F017B8]">Frequently</span>{" "}
          <span className="text-[#4BACBF]">Asked Questions</span>
        </h2>
        <p className="mt-4 mb-8 text-gray-600">
          ShareBIte is a social enterprise with a mission to transform surplus
          food into opportunities to make the world a kinder place.
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
              Where Are ShareBIte Hubs Located?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              ShareBIte Hubs is operational in every county in Ireland, through
              three redistribution hubs in Dublin, Cork and Galway.
            </p>
          </details>
          <details className="w-full border rounded-lg" open="">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
              Does ShareBIte Accept Hot or Prepared Food For Charities?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              We are not currently able to accept hot food for distribution to
              charities, or prepared food from restaurants and hotels.
            </p>
          </details>
          <details className="w-full border rounded-lg" open="">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
              Does ShareBIte Accept Leftovers Or Homemade Products For
              Charities?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              Unfortunately at this time we cannot accept leftover food or
              homemade items for redistribution to charities.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
