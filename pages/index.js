import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import React from "react";

function HomePage() {
  const homePageStyle = {
    /* backgroundColor: "red" */
  };

  const [valorDoFiltro, setvalorDoFiltro] = React.useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        /* Prop Drilling */
        <Menu valorDoFiltro={valorDoFiltro} setvalorDoFiltro={setvalorDoFiltro} />
        <Header />
        <Timeline playlists={config.playlists} searchValue={valorDoFiltro} />
      </div>
    </>
  );
}

export default HomePage;

/* function Menu() {
  return <div>Menu</div>;
} */

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLeve1};

  
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  background-image: url(${config.bg});
  height: 230px;
`
function Header() {
  return (
    <StyledHeader>
      <StyledBanner />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ searchValue, ...props}) {
  console.log(props.playlists);
  const playlistNames = Object.keys(props.playlists);
  // Statement
  // Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        console.log(videos);
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const searchValueNormalized = searchValue.toLowerCase();
                return titleNormalized.includes(searchValueNormalized)
                })
                .map((video) => {
                return (
                  <a key={video.url} href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
