import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  Tab,
  RepoIcon,
  TabContent,
} from "./styles";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";
import api from "../../services/api";
import { APIRepo, APIUser } from "../../@types";

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = "brunobussReal" } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      api.get(`users/${username}`),
      api.get(`users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;
      if (userResponse.status === 404) {
        setData({ error: "user not found" });
        return;
      }
      const user = await userResponse.data;
      const repos = await reposResponse.data;

      const shuffledRepos = repos.sort(() => 0.5 - Math.random());
      const slicedRepos = shuffledRepos.slice(0, 6);
      setData({
        user,
        repos: slicedRepos,
      });
    });
  }, [username]);
  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>;
  }
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
        </LeftSide>
        <RightSide>
          <Tab>
            {/* <TabContent>
              <OverviewIcon />
              <span className="label">Overview</span>
            </TabContent> */}
            <TabContent>
              <RepoIcon />
              <span className="label">Repositories</span>
              <span className="number">{data.user?.public_repos}</span>
            </TabContent>
            <span className="line"></span>
          </Tab>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {data.repos.map((repo) => (
                <RepoCard
                  key={repo.name}
                  username={repo.owner.login}
                  reponame={repo.name}
                  description={repo.description}
                  language={repo.language}
                  stars={repo.stargazers_count}
                  forks={repo.forks}
                />
              ))}
            </div>
          </Repos>
          <CalendarHeading>
            Random Calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
