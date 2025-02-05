import { useEffect, useState } from "react";
import User from "./user";
import './styles.css';

function GithubProfileFinder() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [loadingState, setLoadingState] = useState(true);

  async function fetchGithubUserData() {
    setLoadingState(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (data) {
      setUserData(data);
      setLoadingState(false);
    }
    console.log(data);
  }

  function handleSubmit() {
    fetchGithubUserData()
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loadingState) {
    return <h1> Loading data ! Please wait </h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search github username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null ? 
        <User user = {userData}></User>
        : null
      }
    </div>
  );
}
export default GithubProfileFinder;
