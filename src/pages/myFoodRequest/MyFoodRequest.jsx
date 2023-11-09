import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loading from "../../components/Loading";
import UseAuth from "../../hooks/UseAuth";
import MyFoodRequestCard from "./MyFoodRequestCard";
import { Helmet } from "react-helmet-async";

const MyFoodRequest = () => {
  const { user, loading } = UseAuth();
  //   console.log(user.email);
  if (loading) {
    return <Loading />;
  }
  const { isPending, data: myFoodRequest } = useQuery({
    queryKey: ["myRequestedFoods"],
    queryFn: async () => {
      const res = axios
        .get(
          `https://share-bite-server-dpt0g090w-im3az.vercel.app/myFoodRequest?requesterEmail=${user?.email}`
        )
        .then((data) => {
          return data.data;
        });
      return res;
    },
  });

  if (isPending) {
    return <Loading />;
  }

  //   console.log(myFoodRequest);

  return (
    <div>
      <Helmet>
        <title>ShareBite | My food request</title>
      </Helmet>
      {myFoodRequest.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-10 ">
          {myFoodRequest?.map((foods) => (
            <MyFoodRequestCard
              key={foods._id}
              foods={foods}
            ></MyFoodRequestCard>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <h2 className="text-2xl font-bold text-gray-600">
            You haven&apos;t made any request yet.
          </h2>
        </div>
      )}
    </div>
  );
};

export default MyFoodRequest;
