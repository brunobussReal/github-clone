import React from "react";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"brunobuss"}
            name={"Bruno Buss"}
            avatarUrl={"https://avatars1.githubusercontent.com/u/40147433?v=4"}
            followers={123}
            following={123}
            company={"no company"}
            location={"famalicão, Portugal"}
            email={"myemailmaimmailmailailmailmailmailm"}
            blog={"noblog"}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"brunobuss"}
                  reponame={"reponame"}
                  description={"contains descriotion bahadajdbiabdjasbdojas"}
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={n * n}
                  forks={n + n}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
