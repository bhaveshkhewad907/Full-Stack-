import Card from "./components/Card";
import Test from "./components/test";
import users from "./components/Users";

type UserDetails = {
  name: string;
  img: string;
};

const App = () => {
  return (
    <>
      {users.map((user: UserDetails) => (
        <Card key={user.name} userName={user.name} img={user.img} />
      ))}
      <Test />
    </>
  );
};

export default App;
