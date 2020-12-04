import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { APIRepo } from "../../@types";
import api from "../../services/api";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  const { username, repository } = useParams();
  const [data, setData] = useState<APIRepo>();
  useEffect(() => {
    async function getRepo() {
      const repo = await api.get(`/repos/${username}/${repository}`);
      setData(repo.data);
    }
    getRepo();
  }, [repository, username]);
  if (!data) {
    return <h1>Loading...</h1>;
  }
  console.log(data);
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={`/${data.owner.login}`}>
          {data.owner.login}
        </Link>
        <span>/</span>

        <Link className={"reponame"} to={`/${username}/${repository}`}>
          {data.name}
        </Link>
      </Breadcrumb>
      <p>{data.description}</p>

      <Stats>
        <li>
          <StarIcon />
          <b>{data.stargazers_count}</b>
          <span>starts</span>
        </li>
        <li>
          <ForkIcon />
          <b>{data.forks}</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={`https://github.com/${username}/${repository}`}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
