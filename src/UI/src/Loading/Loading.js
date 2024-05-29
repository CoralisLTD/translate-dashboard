import React from "react";
import { BeatLoader } from "react-spinners";
import { styled, useTheme } from "styled-components";

const StyledLoading = styled("div")`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loading = (props) => {
  const theme = useTheme();
  const { color = theme.color.primary } = props;
  return (
    <StyledLoading>
      <BeatLoader color={color} />
    </StyledLoading>
  );
};

export default Loading;
