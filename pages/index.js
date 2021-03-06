import styles from "../styles/Home.module.css";

export default function StaticRender({ users }) {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Welcome to Static World</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4001/users");
  const users = await res.json();
  console.log("users", users);
  return {
    props: {
      users,
    },
  };
}
