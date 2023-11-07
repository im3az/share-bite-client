const UpdateFoods = () => {
  return (
    <div className=" min-h-screen p-20 text-center">
      <h2 className="text-4xl font-extrabold mb-10">Update a Food</h2>
      <form>
        {/* Food name , image, quantity*/}
        <div className="md:flex mb-8 gap-5">
          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Food Name"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Food Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="foodImage"
                placeholder="Food image URL"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Food quantity</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="quantity"
                placeholder=" Food Quantity (no. of person to be served.)
                "
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* location, expiry date, food status*/}
        <div className="md:flex mb-8 gap-5">
          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Pickup Location</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="location"
                placeholder="Pickup Location
                "
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Expired Date</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="expiryDate"
                placeholder="Expired Date"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Food Status</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="status"
                placeholder="Food Status "
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* Donator image, name, email */}
        <div className="md:flex mb-8 gap-5">
          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Donator Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="donatorImage"
                placeholder="Donator Image URL"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Donator Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="donatorName"
                placeholder="Donator Name"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Donator email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="donatorEmail"
                placeholder="Donator email"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/*  Additional Notes*/}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text"> Additional Notes</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="notes"
                placeholder=" Additional Notes"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update"
          className="btn btn-primary w-1/2"
        />
      </form>
    </div>
  );
};

export default UpdateFoods;
