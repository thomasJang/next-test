import styles from "../styles/Home.module.css";

export default function ServerRender({ users }) {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Welcome to Server World</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4001/users");
  const users = await res.json();
  console.log("users", users);
  return {
    props: {
      users,
    },
  };
}
