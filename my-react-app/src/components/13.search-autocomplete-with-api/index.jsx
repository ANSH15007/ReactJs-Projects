import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    setShowDropdown(false)
    setSearchParam(event.target.innerText)
    setFilteredUsers([])
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filteredUsers);
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading data ! Please wait</h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search Users Here"
          onChange={handleChange}
        />
      )}
      {showDropdown && <Suggestions handleClick = {handleClick} data={filteredUsers}></Suggestions>}
    </div>
  );
}
export default SearchAutocomplete;
