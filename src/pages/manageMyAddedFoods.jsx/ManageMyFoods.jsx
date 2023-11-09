import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../components/Loading";
import UseAuth from "../../hooks/UseAuth";
import ManageTableRow from "./ManageTableRow";
import { Helmet } from "react-helmet-async";

const ManageMyFoods = () => {
  const { user, loading } = UseAuth();

  if (loading) {
    return <Loading />;
  }

  const email = user?.email;

  const { isPending, data: manageMyFoods } = useQuery({
    queryKey: ["manageMyFoods"],
    queryFn: async () => {
      const res = await axios
        .get(`http://localhost:5000/manageMyFoods?donatorEmail=${email}`)
        .then((data) => {
          return data.data;
        });
      return res;
    },
  });

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto p-4 min-h-screen">
      <Helmet>
        <title>ShareBite | Manage my foods</title>
      </Helmet>
      <table className="table min-w-full">
        {/* head */}
        <thead>
          <tr className="text-xl">
            <th className="lg:w-1/4">Food</th>
            <th className="lg:w-1/4">Note</th>
            <th className="lg:w-1/4">Pickup location</th>
            <th className="lg:w-1/4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {manageMyFoods.map((foods) => (
            <ManageTableRow key={foods._id} foods={foods}></ManageTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMyFoods;
