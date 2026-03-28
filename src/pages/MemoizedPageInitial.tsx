import { useState } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

function generateUsers(count: number): User[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `User ${i}`,
    age: Math.floor(Math.random() * 60) + 18,
  }));
}

export const MemoizationPage = () => {
  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [users] = useState(() => generateUsers(5000));

  // eslint-disable-next-line react-hooks/purity
  const id = Math.random();

  const sortedUsers = [...users].sort((a, b) => a.age - b.age);

  return (
    <div>
      <p>parent render {id}</p>
      <p>selectedId: {selectedId}</p>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      <UserList
        users={sortedUsers}
        onSelect={(id: number) => setSelectedId(id)}
      />
    </div>
  );
};

function UserList({
  users,
  onSelect,
}: {
  users: User[];
  onSelect: (id: number) => void;
}) {
  // eslint-disable-next-line react-hooks/purity
  const id = Math.random();

  return (
    <div>
      <p>UserList render {id}</p>
      <ul>
        {users.slice(0, 20).map((user) => (
          <UserItem key={user.id} user={user} onSelect={onSelect} />
        ))}
      </ul>
    </div>
  );
}

const UserItem = ({
  user,
  onSelect,
}: {
  user: User;
  onSelect: (id: number) => void;
}) => {
  // eslint-disable-next-line react-hooks/purity
  const id = Math.random();
  return (
    <li>
      <p>UserItem render {id}</p>
      {user.name} — {user.age}
      <button onClick={() => onSelect(user.id)}>Select</button>
    </li>
  );
};
