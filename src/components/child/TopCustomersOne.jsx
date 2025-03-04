import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import useGetNotifications from "../../hook/apis/Notifications/useGetNotifications"; // Import the hook

const TopCustomersOne = () => {
  // Use the custom hook to fetch notifications
  const { notifications, isLoading, isError, error } = useGetNotifications();

  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
          <h6 className="mb-2 fw-bold text-lg mb-0">Recent Notifications</h6>
        </div>
        <div className="mt-32">
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
            notifications?.map((notification) => {
              // Modify content if needed (e.g., replacing "Congratulations! You" with the username)
              const modifiedContent = notification.content.replace(
                "Congratulations! You",
                notification.user.name
              );

              return (
                <div
                  key={notification._id}
                  className="d-flex align-items-start gap-2 mb-3 justify-content-between"
                >
                  <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                    <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                      <Icon
                        icon="bitcoin-icons:verify-outline"
                        className="icon text-xxl"
                      />
                    </span>
                    <div>
                      <h6 className="text-md fw-semibold mb-4">{notification.title}</h6>
                      <p className="mb-0 text-sm text-secondary-light text-w-120-px">
                        {modifiedContent}
                      </p>
                    </div>
                  </div>
                  <span className="text-xxs text-secondary-light flex-shrink-0">
                    {new Date(notification.createdAt).toLocaleTimeString()}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default TopCustomersOne;
