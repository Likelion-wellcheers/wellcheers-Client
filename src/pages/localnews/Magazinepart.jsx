import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Magazinepart = ({ city_codes }) => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
/*
  useEffect(() => {
    if (city_codes) {
      fetch(`https://wellcheers.p-e.kr/issue/${city_codes}/getmagazine/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setCards(data);
          } else {
            setCards([data]); // 데이터를 배열로 변환
          }
        })
        .catch((error) => {
          console.error('Error fetching magazine data:', error);
        });
    }
  }, [city_codes]);
*/

useEffect(() => {
  if (city_codes) {
    fetch(`https://wellcheers.p-e.kr/issue/${city_codes}/getmagazine/`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCards(data);
        } else {
          setCards([data]); // 데이터를 배열로 변환
        }
      })
      .catch((error) => {
        console.error('Error fetching magazine data:', error);
      });
  }
}, [city_codes]);

  if(cards){
  return (
    <CardWrapper>
      {cards.map((card, index) => (
        <Card key={index}>
          <CardImage src={card.image ? card.image : '/images/default.png'} alt={card.content} />
          <CardContent>
            <CardTitle>{card.content}</CardTitle>
            <DetailButton onClick={() => navigate('/eachmagazine', { state: { id: card.id, region_id: card.region_id } })}>상세보기</DetailButton>
          </CardContent>
        </Card>
      ))}
    </CardWrapper>
  );
};
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  //justify-content: center;
  margin: 2% 6%;
  width: 1240px;
`;

const Card = styled.div`
  width: 30%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 10px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5px;
  margin-left: 5px;
`;

const CardTitle = styled.h3`
  margin: 3px 0 10px;
  font-size: 1.2rem;
`;

const DetailButton = styled.button`
  padding: 10px;
  border: none;
  background: linear-gradient(247.34deg, #BCBDFF 7.5%, #5D5FEF 62.93%);
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: fit-content;
  //float: right;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;