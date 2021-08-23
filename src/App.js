import { Component } from "react";
import { v4 as uuid4 } from "uuid";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        users = users.map((user) => ({ ...user, uuid: uuid4() }));
        return this.setState({ monsters: users });
      });
  }

  handleSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <main className="App">
        <h1 aria-label="Page title">Monsters rolodex</h1>
        <SearchBox
          inputName="searchMonsters"
          placeholder="search monsters"
          handleChange={this.handleSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </main>
    );
  }
}

export default App;
