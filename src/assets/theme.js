const theme = {
  loaded: true,
  unit: "px",
  base: "",
  color: {
    primary: "#5382F6",
    disabled: "#BDCBD0",
    text: "#1C1B1F",
    notification: "#0056D8",
    title: "#0056D8",
    white: "#FFFFFF",
    lightGray: "#D9D9D9",
    gray: "#F0F2F3",
    lightBlue: "#EBF5FF",
    label: "#7D8E95",
    lightGreen: "#F3FED9",
    green: "#82BA00",
    blue: "#267DFF",
    darkGray: "#4A6900",
    scrollbar: "#ACBADB",
    scrollbarTrack: "#D9E4FF",
    grayBox: "#DFE6F5",
    background: "#F6F7FC",
    error: "#EE5840",
    errorNotification: "#F37153"
  },
  space(...args) {
    const result = (args.length ? [...args] : [1]).reduce(
      (str, curr) => `${str} ${curr}px`,
      ""
    );
    return result;
  },
  css: {
    borderRadius: "8px;",
    centered:
      "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);",
    transition: "all 300ms ease-in-out;",
    boxShadow: "0px 4px 6px -2px rgba(0,0,0,0.5);",
  },
};

export default theme;
