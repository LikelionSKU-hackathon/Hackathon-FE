import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import * as S from "../styles/components/Calendar";
//import 'react-calendar/dist/Calendar.css';
import '../styles/components/Calendar.css';
import ang from '../assets/myPage/icon_ang.svg';
import good from '../assets/myPage/icon_good.svg';
import happy from '../assets/myPage/icon_happy.svg';
import sad from '../assets/myPage/icon_sad.svg';
import soso from '../assets/myPage/icon_soso.svg';
import upset from '../assets/myPage/icon_upset.svg';

// 날짜와 이미지를 포함한 데이터
let dirary;
const emogi = {"화나요":ang,"슬퍼요" : sad, "그저그래요":soso, "행복해요":happy,"기뻐요":happy, "뿌듯해요":good, "속상해요":upset};
export default function CalendarView(Props) {
  const [value, setValue] = useState(new Date());
  const renderTileContent = ({ date, view }) => {
    const dateInfo = dirary.find(d => d.date.toDateString() === date.toDateString());
    if(dateInfo)
      console.log(dateInfo.image);
    return (
      <S.DateContainer>
        {dateInfo && <S.DateImage src={emogi[dateInfo.image]} alt="date image" />}
        {!dateInfo && <S.DefaultCircle />}
      </S.DateContainer>
    );
  };
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const day = date.getDay();
      const today = new Date();
      if (day === 0) { return 'sunday'; } // 일요일
      if (day === 6) { return 'saturday'; } // 토요일
      if (date.toDateString() === today.toDateString()) {return 'today'; } // 오늘 날짜
    }
    return null;
  };

  const onClickDay = (date) => {
    //Props.onClick(true);
    const data = dirary.find(d => d.date.toDateString() === date.toDateString());
    if (data) {
      Props.onClick(data);
    } else {
      //setClickedData(null);
      Props.onClick(data);
    }
    
  };

  dirary = Props.date;
  return (
    <>
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={renderTileContent}
        onClickDay={onClickDay}
        calendarType='hebrew'
        tileClassName={tileClassName}
        formatShortWeekday={(locale, date) => date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}
        formatDay={(locale, date) => moment(date).format('D')}
        showNeighboringMonth={true}
        prev2Label={null} // 이전 해 버튼 숨기기
        next2Label={null} // 다음 해 버튼 숨기기
        prevLabel={<S.CalendarSpan style={{ fontSize: '13px' }}>&lt; 지난달</S.CalendarSpan>}
        nextLabel={<S.CalendarSpan style={{ fontSize: '13px' }}>다음달 &gt;</S.CalendarSpan>}
        navigationLabel={({ date, label, locale, view }) => {
          if (view === 'month') {
            return (
              <S.CalendarTitle>
                {date.getFullYear()}년<br />{date.getMonth() + 1}월의 쓰임 모음
              </S.CalendarTitle>
            );
          }
          return label;
        }}
        maxDetail="month"
        minDetail="month"
      />
    </>
  );
}
