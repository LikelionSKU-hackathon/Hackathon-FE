// src/styles/components/Calendar.js
import styled from 'styled-components';

export const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-top: 15px;
  cursor: pointer;
`;

export const DateNumber = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const DateImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const DefaultCircle = styled.div`
  width: 100%;
  height: 100%;
  border: 2px dashed #ccc;
  border-radius: 50%;
`;
export const CalendarSpan = styled.span`
  font-weight: 500;
  font-size: 11px;
  color: #6B6B6B;
`;
export const CalendarTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  font-family: Pretendard;
`;