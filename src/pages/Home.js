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
          <Link to="/proceedures">
            <div href="#">תרגום הודעות של פרוצדורות</div>
          </Link>
        </Item>
        <Item>
          <Link to="/screens">
            <div href="#">תרגום הודעות של מסכים</div>
          </Link>
        </Item>
        <Item>
          <Link to="/enteties">
            <div href="#">תרגום הודעות של פרוצדורות</div>
          </Link>
        </Item>
        <Item>
          <Link to="/parameters">
            <div href="#">תרגום הודעות של מסכים</div>
          </Link>
        </Item>
        <Item>
          <Link to="/columns?page=1">
            <div href="#">תרגום הודעות של מסכים</div>
          </Link>
        </Item>
      </List>
    </>
  );
};

export default Home;
