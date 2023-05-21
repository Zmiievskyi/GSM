import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UserList } from "../../api/getUsers";
import { Item } from "../card/Card";
import { ListProps } from "../../features/Models";

export const ItemList: React.FC<ListProps> = ({ userList, filter }) => {
  const [_, setRender] = useState<boolean>(false);
  const [allUserList, setAllUserList] = useState<UserList>([]);

  useEffect(() => {
    const following = userList.filter((user: any) => user.add === true);
    const follow = userList.filter((user: any) => user.add !== true);
    switch (filter) {
      case "followings":
        setAllUserList(following);
        break;
      case "follow":
        setAllUserList(follow);
        break;
      case "all":
        setAllUserList(userList);
        break;
      default:
        setAllUserList(userList);
        break;
    }
  }, [userList, filter]);

  const handleFollow = (id: any) => {
    const user = userList.find((user) => user.id === id);
    if (user) {
      user.add = !user.add;
      user.followers = user.add ? user.followers + 1 : user.followers - 1;
      const userIdx = userList.findIndex((user) => user.id === id);
      userList.splice(userIdx, 1, user);
      localStorage.setItem("GoIT users", JSON.stringify(userList));
      setRender((prev) => !prev);
    }
  };

  return (
    <div className="bg-secondary " style={{ minHeight: "1200px" }}>
      <Container className="pt-5 ">
        <Row className="justify-content-around">
          {allUserList.map((user) => {
            return (
              <Col key={user.id} style={{ flex: 0, padding: "20px" }}>
                <Item user={user} onFollow={handleFollow} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
