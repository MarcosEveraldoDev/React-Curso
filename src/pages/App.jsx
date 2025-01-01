import { useState } from "react";
import LogoGitHub from "../assets/images/github.png";
import Input from "../components/Input";
import IntemRepo from "../components/IntemRepo";
import Button from "../components/Button";
import { Container } from "./styles";
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      setRepos((prev) => [...prev, data]);
    }
  };
    
    const handleRemoveRepo = (id) => { 
        setRepos((prev) => prev.filter(repo => repo.id !== id))
    }

  return (
    <Container>
      <img src={LogoGitHub} width={72} height={72} />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo}>Search</Button>
      {repos.map(repo => <IntemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo} />)}
    </Container>
  );
}

export default App;
