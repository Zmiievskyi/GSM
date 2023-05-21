import { lazy, useState, useEffect } from "react";
import { Route, Routes, redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./layout/Layout";
import { Page404 } from "./pages/404";
import { getUsersApi } from "./api/getUsers";
import { UserList } from "./features/Models";

const ItemList = lazy(() =>
  import("./components/cardList/CardList").then((module) => ({
    ...module,
    default: module.ItemList,
  }))
);

function App() {
  // const [isFollow, setIsFollow] = useState<boolean>(false);
  // const [isFollowing, setIsFollowing] = useState<boolean>(false);

  const [allUserList, setAllUserList] = useState<UserList>([]);

  useEffect(() => {
    const userslist = localStorage.getItem("GoIT users");
    if (typeof userslist === "string" && JSON.parse(userslist).length > 0) {
      setAllUserList(JSON.parse(userslist));
    } else {
      getUsersApi().then((data) => {
        setAllUserList(data);
        localStorage.setItem("GoIT users", JSON.stringify(data));
      });
    }
  }, []);

  

  return (
    <div >
      <Routes>
        <Route path="/" element={<Layout  />}>
          <Route
            index
            element={<ItemList userList={allUserList} filter={"all"} />}
          />
          <Route
            path="/followings"
            element={<ItemList userList={allUserList} filter={"followings"} />}
          />
          <Route
            path="/follow"
            element={<ItemList userList={allUserList} filter={"follow"} />}
          />
          <Route path="/tweets" element={<Page404 />} />
          <Route path="*" element={<ItemList userList={allUserList} />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
