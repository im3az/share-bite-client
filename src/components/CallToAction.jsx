const CallToAction = () => {
  return (
    <section className="py-6 bg-gray-100 text-gray-900">
      <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
        <div className="flex flex-col space-y-4 text-center lg:text-left">
          <h1 className="text-5xl font-bold leading-3">
            Add impact to your inbox
          </h1>
          <p className="text-lg">
            e have redistributed over 234.8 Million Meals in Ireland &
            internationally since 2013. By rescuing more than 98,606 tonnes of
            food from going to waste, over 315,539 tonnes of CO2-equivalent has
            been avoided.
          </p>
        </div>
        <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-cyan-600 text-gray-50"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
