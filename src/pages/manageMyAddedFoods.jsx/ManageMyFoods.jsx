import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../components/Loading";
import UseAuth from "../../hooks/UseAuth";
import { useMemo } from "react";
import ManageTableRow from "./ManageTableRow";

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

  // console.log(manageMyFoods);

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto p-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-xl t">
            <th>Food</th>
            <th>Note</th>
            <th>Pickup location</th>
            <th>Actions</th>
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
