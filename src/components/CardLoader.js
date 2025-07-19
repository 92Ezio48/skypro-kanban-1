import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const BlurredCardSkeleton = styled.div`
  width: 100%;
  height: 88px;
  margin-bottom: 16px;
  border-radius: 8px;
  background: #282832;
  position: relative;
  overflow: hidden;

  /* Шиммер-анимация по ::after */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      #282832 25%,
      #34344a 45%,
      #464660 55%,
      #282832 75%
    );
    background-size: 400% 100%;
    animation: ${shimmer} 1s infinite linear;
    opacity: 0.48;
    pointer-events: none;
  }
`;

// Можно добавить полоски внутри скелетона для стилизации
const SkeletonContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 16px 18px;

  /* Имитация заголовка и пары полосок текста */
  .title {
    width: 48%;
    height: 18px;
    border-radius: 6px;
    background: #39394a;
    margin-bottom: 18px;
  }
  .line {
    width: 80%;
    height: 11px;
    border-radius: 5px;
    background: #313140;
    margin-bottom: 9px;
  }
`;

function CardsLoader() {
  return (
    <BlurredCardSkeleton>
      <SkeletonContent>
        <div className="title"></div>
        <div className="line"></div>
        <div className="line" style={{ width: "35%" }}></div>
      </SkeletonContent>
    </BlurredCardSkeleton>
  );
}

export default CardsLoader;
