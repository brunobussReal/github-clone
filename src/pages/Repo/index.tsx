import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/brunobussReal"}>
          brunobuss
        </Link>
        <span>/</span>

        <Link className={"reponame"} to={"/brunobussReal/reponame"}>
          reponame
        </Link>
      </Breadcrumb>
      <p>Contains my personal info</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>starts</span>
        </li>
        <li>
          <ForkIcon />
          <b>1</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/brunobussReal/brunobussReal"}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
