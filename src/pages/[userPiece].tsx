import { useRouter } from "next/router";
import { Container } from "../components/ComponentsUserPiece/Conteiner";
import { useContext, useEffect } from "react";
import { api } from "../services/api";
import { DataListSectionUserContext } from "../Providers/datalistUserSection";

export const requestApiListUser = (setSessaoUser, queryUrl) => {
  api
    .get(`/listdata/${queryUrl}`)
    .then((response) => {
      setSessaoUser(response.data[0].section);
    })
    .catch((err) => console.log(err));
};

const UserPiece = () => {
  const { userPiece } = useRouter().query;

  const { setSessaoUser } = useContext(DataListSectionUserContext);

  useEffect(() => {
    requestApiListUser(setSessaoUser, userPiece);
  }, [userPiece]);

  return <Container title={userPiece} />;
};

export default UserPiece;
