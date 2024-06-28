import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TaskFlowList } from "./taskFlow/TaskFlowList";
import { TaskFlowCreate } from "./taskFlow/TaskFlowCreate";
import { TaskFlowEdit } from "./taskFlow/TaskFlowEdit";
import { TaskFlowShow } from "./taskFlow/TaskFlowShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { TaskStatusList } from "./taskStatus/TaskStatusList";
import { TaskStatusCreate } from "./taskStatus/TaskStatusCreate";
import { TaskStatusEdit } from "./taskStatus/TaskStatusEdit";
import { TaskStatusShow } from "./taskStatus/TaskStatusShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"wl任务管理系统"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TaskFlow"
          list={TaskFlowList}
          edit={TaskFlowEdit}
          create={TaskFlowCreate}
          show={TaskFlowShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="TaskStatus"
          list={TaskStatusList}
          edit={TaskStatusEdit}
          create={TaskStatusCreate}
          show={TaskStatusShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
