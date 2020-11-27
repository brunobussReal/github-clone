import React from "react";

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
          <Tab>
            {/* <TabContent>
              <OverviewIcon />
              <span className="label">Overview</span>
            </TabContent> */}
            <TabContent>
              <RepoIcon />
              <span className="label">Repositories</span>
              <span className="number">55</span>
            </TabContent>
            <span className="line"></span>
          </Tab>
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
