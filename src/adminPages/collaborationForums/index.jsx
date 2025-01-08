import React from "react";
import DefaultTabs from "../../components/child/DefaultTabs";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../../components/Breadcrumb";
const CollaborateForums = () => {
  const tabList = ["requested", "accepted", "rejected"];

  const data = {
    userName: "Mary Bones",
    createdAt: "24 Dec 2024",
    profileImage: "/assets/images/user.png",
    postImage:
      "https://media.istockphoto.com/id/1394781347/photo/hand-holdig-plant-growing-on-green-background-with-sunshine.jpg?s=612x612&w=0&k=20&c=COX7-_QX8cLlL-oFKQYJgG5CEItpIN4JBbtcjPap1cA=",
    postText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  };
  return (
    <div>
      <MasterLayout>
        <Breadcrumb
          heading="Collaboration Forums"
          title="Collaboration Forums"
        />

        <DefaultTabs tabList={tabList} bodyType="card" data={data} />
      </MasterLayout>
    </div>
  );
};

export default CollaborateForums;
