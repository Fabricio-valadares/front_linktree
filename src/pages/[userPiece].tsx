import { useRouter } from "next/router";
import { Container } from "../components/ComponentsUserPiece/Conteiner";
import { useContext, useEffect } from "react";
import { api } from "../services/api";
import { DataListSectionUserContext } from "../Providers/datalistUserSection";

export const requestApiListUser = (setSessaoUser: any) => {
  api
    .get("/section/listsectionuser", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc2NzkzOTksImV4cCI6MTYzNzg1MjE5OSwic3ViIjoiY2MxOGY0NzktMWRlYi00NTI2LTk4MDItYzJmNzczOWM1NzJkIn0.RIqfXbKZFrf8pkbXDJww5VEowRoqqgdYqPJTRcPzNvc`,
      },
    })
    .then((response) => {
      setSessaoUser(response.data);
    })
    .catch((err) => console.log(err));
};

const UserPiece = () => {
  const { userPiece } = useRouter().query;
  const { setSessaoUser } = useContext(DataListSectionUserContext);

  useEffect(() => {
    requestApiListUser(setSessaoUser);
  }, []);

  return <Container title={userPiece} />;
};

export default UserPiece;
