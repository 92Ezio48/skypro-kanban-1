import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const BlurredCardSkeleton = styled.div`
  width: 88%;
  min-width: 200px;
  max-width: 360px;
  height: 78px;
  margin-bottom: 18px;
  border-radius: 10px;
  background: ${({ $isDarkTheme }) => ($isDarkTheme ? "#23232A" : "#fff")};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);

  position: relative;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      ${({ $isDarkTheme }) =>
        $isDarkTheme
          ? "#252532 25%, #282837 45%, #333346 55%, #252532 75%"
          : "#fff 25%, #ececec 45%, #ededed 55%, #fff 75%"}
    );
    background-size: 400% 100%;
    animation: ${shimmer} 1.1s infinite linear;
    opacity: ${({ $isDarkTheme }) => ($isDarkTheme ? 0.45 : 0.7)};
    pointer-events: none;
  }
`;

const SkeletonContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 14px 16px;

  .title {
    width: 53%;
    height: 13px;
    border-radius: 6px;
    background: ${({ $isDarkTheme }) =>
      $isDarkTheme ? "#313141" : "#e6e6e8"}; // более тёмный оттенок для dark
    margin-bottom: 13px;
  }
  .line {
    width: 80%;
    height: 9px;
    border-radius: 5px;
    background: ${({ $isDarkTheme }) =>
      $isDarkTheme ? "#39394a" : "#ededed"}; // более тёмный для dark
    margin-bottom: 8px;
  }
`;

function CardsLoader({ isDarkTheme }) {
  return (
    <BlurredCardSkeleton $isDarkTheme={isDarkTheme}>
      <SkeletonContent $isDarkTheme={isDarkTheme}>
        <div className="title"></div>
        <div className="line"></div>
        <div className="line" style={{ width: "35%" }}></div>
      </SkeletonContent>
    </BlurredCardSkeleton>
  );
}

export default CardsLoader;
