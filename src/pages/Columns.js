import { useEffect, useState, useMemo } from "react";
import { observer, inject } from "mobx-react";
import { Button, Input } from "../UI";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import { getCleanText, stripHtmlAndSpecialChars } from "../utils/text";
import { useNavigate, useLocation } from "react-router-dom";
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

const Columns = ({ translateStore }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [lang, setLang] = useState(2);
  const [translation, setTranslation] = useState(null);
  const [top, setTop] = useState(50);
  const [skip, setSkip] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // const newTop = page * top;
      // const newSkip = page * top - 50;
      const data = await translateStore.get_TRHELPFORM({ top, skip });
      const list = data?.filter((item) => {
        let cleanText = stripHtmlAndSpecialChars(
          item?.TRFORMCLMNHELP_SUBFORM?.TEXT
        );
        if (!cleanText) return false;
        return true;
      });
      setItems(list);
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [top, skip]);

  useEffect(() => {
    setTop(page * 50);
    setSkip(page * 50 - 50);
  }, [page]);

  const translate = (params) => {
    const updatedTranslation = {
      ...translation,
      [params.index]: {
        FORM: params.FORM,
        NAME: params.NAME,
        data: params.value || ""
      }
    };
    setTranslation(updatedTranslation);
  };

  const handleNextPage = () => {
    navigate(`/columns?page=${page + 1}`);
  };

  const handlePrevPage = () => {
    navigate(`/columns?page=${page - 1}`);
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
      FORM: translation[index].FORM,
      GLANG: "en-GB"
    };
    setLoading(true);
    const res = await translateStore.update_TRHELPFORM(body);
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
            <Title>תרגום עזרות לעמודות מסך</Title>
          </div>
          <button onClick={handlePrevPage} disabled={page === 1}>
            הקודם
          </button>
          <button onClick={handleNextPage}>הבא</button>
          <p>עמוד מספר: {page}</p>
          <ul style={{ padding: 0 }}>
            <li>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "12px",
                  alignItems: "center",
                  margin: "15px 0"
                }}>
                <span style={{ width: "342px", textAlign: "start" }}>
                  ערך לתרגום
                </span>
                <span>התרגום</span>
              </div>
            </li>
            {memoizeditems?.map((item, index) => {
              let cleanText = getCleanText(item?.TRFORMCLMNHELP_SUBFORM?.TEXT);
              let translationValue =
                !!item?.TRLANGS2_SUBFORM.length &&
                item?.TRLANGS2_SUBFORM?.find((it) => it.LANG === 2)
                  ?.LANGFORMCLMNHELP2_SUBFORM?.TEXT;
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
                          FORM: item.FORM,
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
                          EXEC: item.EXEC,
                          NUM: item.NUM,
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

export default inject("translateStore")(observer(Columns));
