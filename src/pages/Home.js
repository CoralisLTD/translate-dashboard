import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.div(() => ({
  fontSize: 30
}));

const List = styled.ul(() => ({
  height: "90vh",
  padding: "0 12px",
  textAlign: "center",
  margin: "0 auto"
}));

const Item = styled.li(() => ({
  width: "fit-content",
  margin: "0 auto",

  "&:hover": {
    textDecoration: "underline"
  }
}));

const Home = () => {
  return (
    <>
      <Title>רשימת המודולים לתרגום</Title>
      <List>
        <Item>
          <Link to="/proceedures?page=1">
            <div href="#">תרגום הודעות של פרוצדורות</div>
          </Link>
        </Item>
        <Item>
          <Link to="/screens?page=1">
            <div href="#">תרגום הודעות של מסכים</div>
          </Link>
        </Item>
        <Item>
          <Link to="/enteties?page=1">
            <div href="#">תרגום עזרות לישויות</div>
          </Link>
        </Item>
        <Item>
          <Link to="/parameters?page=1">
            <div href="#">תרגום עזרות פרמטרים לפרוצדורה</div>
          </Link>
        </Item>
        <Item>
          <Link to="/columns?page=1">
            <div href="#">תרגום עזרות לעמודות מסך</div>
          </Link>
        </Item>
        <Item>
          <Link to="/tables?page=1">
            <div href="#">תרגום לטבלאות</div>
          </Link>
        </Item>
        <Item>
          <Link to="/tablesColumns?page=1">
            <div href="#">תרגום לעמודות של טבלאות</div>
          </Link>
        </Item>
        <Item>
          <Link to="/titles?page=1">
            <div href="#">תרגום לכותרות פלט</div>
          </Link>
        </Item>
        <Item>
          <Link to="/programs?page=1">
            <div href="#">תרגום לתוכניות</div>
          </Link>
        </Item>
        <Item>
          <Link to="/executions?page=1">
            <div href="#">תרגום ליישויות של Tabula</div>
          </Link>
        </Item>
        <Item>
          <Link to="/formColumns?page=1">
            <div href="#">תרגום לעמודות של טפסים</div>
          </Link>
        </Item>
        <Item>
          <Link to="/reportsColumns?page=1">
            <div href="#">תרגום לעמודות של דו״חות</div>
          </Link>
        </Item>
      </List>
    </>
  );
};

export default Home;
