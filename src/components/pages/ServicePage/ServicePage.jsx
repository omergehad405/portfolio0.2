import React, { useEffect } from "react";
import Services from "./Services";
import NeedProject from "../../static/NeedProject";

function ServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Services />
      <NeedProject />
    </>
  );
}

export default ServicePage;
