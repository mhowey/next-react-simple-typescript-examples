import { users } from "@components/UserSearch";
import UserSearchClass from "@components/UserSearchClass";

const ClassesPage: React.FC = () => {
  return (
    <div>
      <h1>Classes and TypeScript Types</h1>
      <UserSearchClass users={users} />
    </div>
  );
};

export default ClassesPage;
