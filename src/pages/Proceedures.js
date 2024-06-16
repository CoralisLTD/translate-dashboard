import { useEffect, useState, useMemo } from "react";
import { observer, inject } from "mobx-react";
import { Button, Input } from "../UI";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import { reverseText, stripHtmlAndSpecialChars } from "../utils/text";
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

const Proceedures = ({ translateStore }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [lang, setLang] = useState(2);
  const [translation, setTranslation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await translateStore.get_TREXTMSG();
      const list = data?.filter((item) => {
        let cleanText = stripHtmlAndSpecialChars(item?.MESSAGE);
        if (!cleanText) return false;
        return true;
      });
      setItems(list);
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const switchTranslationLang = (lang) => {
  //   setLang(lang);
  // };

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     setValue()
  //   }, 3000)

  //   return () => clearTimeout(delayDebounceFn)
  // }, [translation]);

  const translate = (params) => {
    const updatedTranslation = {
      ...translation,
      [params.index]: {
        EXEC: params.EXEC,
        NUM: params.NUM,
        data: params.value || ""
      }
    };
    setTranslation(updatedTranslation);
  };

  const handleInputTranslate = async (index) => {
    const body = {
      data: {
        MESSAGE: translation[index]?.data.substring(0, 55),
        LANGEXTMSGTEXT_SUBFORM: {
          TEXT: translation[index]?.data.substring(55)
        },
        LANG: lang
      },
      EXEC: translation[index].EXEC,
      NUM: translation[index].NUM,
      LANG: lang
    };
    setLoading(true);
    const res = isUpdate
      ? await translateStore.update_TREXTMSG(body)
      : await translateStore.add_TREXTMSG(body);

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
            <Title>תרגום הודעות של פרוצדורות</Title>
            {/* <Button
              style={{ width: 220, marginInlineStart: "auto" }}
              // onClick={() => switchTranslationLang(2)}
              active={lang === 2}>
              HE to EN
            </Button>
            <Button
              style={{ width: 220, marginInlineEnd: "auto" }}
              // onClick={() => switchTranslationLang(1)}
              active={lang === 1}>
              EN to HE
            </Button> */}
          </div>
          <ul style={{ padding: 0 }}>
            {memoizeditems?.map((item, index) => {
              let cleanText = stripHtmlAndSpecialChars(item?.MESSAGE);
              if (item.TREXTMSGTEXT_SUBFORM?.TEXT) {
                cleanText =
                  cleanText + reverseText(item.TREXTMSGTEXT_SUBFORM?.TEXT);
              }
              let translationValue = item.LANGEXTMSG_SUBFORM.find(
                (it) => it.LANG === 2
              )?.MESSAGE;

              if (item.LANGEXTMSG_SUBFORM[0]?.LANGEXTMSGTEXT_SUBFORM?.TEXT) {
                translationValue =
                  translationValue +
                  item.LANGEXTMSG_SUBFORM[0]?.LANGEXTMSGTEXT_SUBFORM?.TEXT;
              }
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
                      value={
                        translation
                          ? translation[index]?.data
                          : translationValue
                      }
                      type="text"
                      onChange={(e) => {
                        translate({
                          index: index,
                          EXEC: item.EXEC,
                          NUM: item.NUM,
                          value: e.target.value
                        });
                        setIsUpdate(!!translationValue);
                      }}
                    />
                  ) : (
                    <TextArea
                      label={cleanText}
                      rows={Math.ceil(cleanText.length / 80)}
                      direction={lang === 2 ? "ltr" : "rtl"}
                      value={
                        translation
                          ? translation[index]?.data
                          : translationValue
                      }
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
                        setIsUpdate(!!translationValue);
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

export default inject("translateStore")(observer(Proceedures));
