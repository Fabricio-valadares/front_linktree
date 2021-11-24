import { useRouter } from "next/router";

const UserPiece = () => {
  const { userPiece } = useRouter().query;

  return <h1>My url user {userPiece}</h1>;
};

export default UserPiece;
