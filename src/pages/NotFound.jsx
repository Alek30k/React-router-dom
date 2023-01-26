import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return <div>"Not Found"</div>;
};

export default NotFound;
