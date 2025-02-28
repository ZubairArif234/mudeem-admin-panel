import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import useGetLeaderboard from "../../hook/apis/leaderboard/leaderboard";

const TopSellingProductOne = () => {
  const { leaderboard, isLoading, isError, error } = useGetLeaderboard();

  if (isLoading) {
    return <div>Loading leaderboard...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="card h-100">
      <div className="card-body p-24">
        <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
          <h6 className="mb-2 fw-bold text-lg mb-0">
            <Icon
              className="me-2"
              icon="material-symbols:leaderboard-rounded"
              width="24"
              height="24"
            />
            Leaderboard
          </h6>
        </div>
        <div className="table-responsive scroll-sm" style={{ maxHeight: "400px", overflowY: "auto" }}>
          <table className="table bordered-table mb-0">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Total Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard?.map((entry, index) => (
                <tr key={entry._id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={entry.profilePicture}
                        alt={entry.name}
                        className="flex-shrink-0 me-12 radius-8 me-12"
                        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                      />
                      <div className="flex-grow-1 d-flex">
                        <h6 className="text-md mb-0 fw-normal">{entry.name}</h6>
                        {index === 0 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="none"
                            viewBox="0 0 26 26"
                          >
                            {/* Gold Medal SVG */}
                          </svg>
                        ) : index === 1 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            {/* Silver Medal SVG */}
                          </svg>
                        ) : index === 2 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="none"
                            viewBox="0 0 28 28"
                          >
                            {/* Bronze Medal SVG */}
                          </svg>
                        ) : null}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-sm text-secondary-light fw-normal">
                      {entry.email || "N/A"}
                    </span>
                  </td>
                  <td>{entry.phone || "N/A"}</td>
                  <td className="text-success-500 fw-bold">
                    {entry.points || "N/A"} pts
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProductOne;