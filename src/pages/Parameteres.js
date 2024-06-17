import { useEffect, useState, useMemo } from "react";
import { observer, inject } from "mobx-react";
import { Button, Input } from "../UI";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import { getCleanText } from "../utils/text";
import { useNavigate } from "react-router-dom";
import { TextArea } from "../UI/src/Input";

const Title = styled.div(() => ({
  fontSize: 30
}));

const List = styled.div(() => ({
  overflowY: "auto",
  margin: "20px",
  height: "90vh",
  padding: "0 12px",

  "&::-webkit-scrollbar": {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    scrollbarWidth: "thin",
    width: "5px"
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#000",
    borderRadius: "20px",
    scrollbarWidth: "thin",
    width: "5px",
    height: "30%"
  }
}));

const Parameters = ({ translateStore }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [lang, setLang] = useState(2);
  const [translation, setTranslation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await translateStore.get_TRHELPPROGRAM();
      const list = data?.filter((item) => {
        let cleanText = getCleanText(item?.TRFORMCLMNHELP_SUBFORM?.TEXT);
        if (!cleanText) return false;
        return true;
      });
      setItems(list);
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const translate = (params) => {
    const updatedTranslation = {
      ...translation,
      [params.index]: {
        PROG: params.PROG,
        KANG: params.PROG,
        NAME: params.NAME,
        data: params.value || ""
      }
    };
    setTranslation(updatedTranslation);
  };

  const handleInputTranslate = async (index) => {
    const body = {
      data: {
        LANGFORMCLMNHELP2_SUBFORM: {
          TEXT: translation[index]?.data
        },
        LANG: lang
      },
      NAME: translation[index].NAME,
      PROG: translation[index].PROG,
      GLANG: "en-GB"
    };
    setLoading(true);
    const res = await translateStore.update_TRHELPPROGRAM(body);
    setLoading(false);
    if (res?.isSucceed) {
      console.log("data is saved");
    }
  };
  const memoizeditems = useMemo(() => items, [items]);

  return (
    <List>
      {isLoading ? (
        <div>
          <span>
            <ClipLoader color={"#5382F6"} size={50} />
          </span>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              alignItems: "center"
            }}>
            <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              בחזרה לדף הראשי
            </div>
            <Title>תרגום עזרות פרמטרים לפרוצדורה</Title>
          </div>
          <ul style={{ padding: 0 }}>
            {memoizeditems?.map((item, index) => {
              let cleanText = getCleanText(item?.TRFORMCLMNHELP_SUBFORM?.TEXT);
              let translationValue = item.TRLANGS2_SUBFORM.find(
                (it) => it.LANG === 2
              )?.LANGFORMCLMNHELP2_SUBFORM?.TEXT;

              return (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "12px",
                    alignItems: "center",
                    margin: "15px 0"
                  }}>
                  {cleanText.length <= 150 ? (
                    <Input
                      label={cleanText}
                      direction={lang === 2 ? "ltr" : "rtl"}
                      value={getCleanText(
                        translation && translation[index]
                          ? translation[index]?.data
                          : translationValue
                      )}
                      type="text"
                      onChange={(e) => {
                        translate({
                          index: index,
                          PROG: item.PROG,
                          NAME: item.NAME,
                          value: e.target.value
                        });
                      }}
                    />
                  ) : (
                    <TextArea
                      label={cleanText}
                      rows={Math.ceil(cleanText.length / 80)}
                      direction={lang === 2 ? "ltr" : "rtl"}
                      value={getCleanText(
                        translation && translation[index]
                          ? translation[index]?.data
                          : translationValue
                      )}
                      style={{
                        height: "100%",
                        textAlign: lang === 2 ? "end" : "start"
                      }}
                      onChange={(e) => {
                        translate({
                          index: index,
                          PROG: item.PROG,
                          NAME: item.NAME,
                          value: e.target.value
                        });
                      }}
                    />
                  )}
                  <Button
                    width={"12%"}
                    onClick={() => handleInputTranslate(index)}
                    style={{ alignSelf: "flex-start" }}>
                    {isLoading && (
                      <div>
                        <ClipLoader color={"red"} />
                      </div>
                    )}
                    שמור
                  </Button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </List>
  );
};

export default inject("translateStore")(observer(Parameters));
