import WebServices from "./WebServices";
import WebPackages from "./WebPackages";
import ProjectRequest from "./WebServiceRequest";

const WebServicesControl = () => {
  return (
    <>
      <WebServices />
      <WebPackages />
      <ProjectRequest />
    </>
  );
};

export default WebServicesControl;