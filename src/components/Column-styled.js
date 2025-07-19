import styled from "styled-components";
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 20%;
  margin: 0 auto;
  @media (max-width: 600px) {
    gap: 10px;
    min-width: 260px;
    max-width: 320px;
    flex-direction: column;
    margin: 0;
    // возможно, уменьшить min-width колонок
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  color: rgb(148, 166, 190);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: uppercase;
`;

export const CardsBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    flex-direction: row;
  }
`;
