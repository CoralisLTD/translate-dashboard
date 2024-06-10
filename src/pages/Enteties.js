import { useEffect, useState } from "react";
import { observer, inject } from "mobx-react";
import { Button, Input } from "../UI";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import {
  reverseText,
  stripHtmlAndSpecialChars,
} from "../utils/text";

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

const Screens = ({ translateStore }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [lang, setLang] = useState(2);
  const [translation, setTranslation] = useState(null);

  useEffect(() => {
    const fetchPros = async () => {
      setLoading(true);
      const procs = await translateStore.get_TRHELPEXEC();
      const list = procs.filter((proc) => {
        let cleanText = stripHtmlAndSpecialChars(proc?.MESSAGE);
        if (!cleanText) return false;
        return true;
      });
      setItems(list);
      setLoading(false);
    };
    fetchPros();
  }, []);

  const switchTranslationLang = (lang) => {
    setLang(lang);
  };

  const translate = (params) => {
    if (params.value) {
      setTranslation({
        [params.index]: {
          ENAME: params.ENAME,
          TYPE: params.TYPE,
          data: params.value
        }
      });
    }
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
      ENAME: translation[index].ENAME,
      TYPE: translation[index].TYPE
    };
    setLoading(true);
    const res = isUpdate
      ? await translateStore.update_TRHELPEXEC(body)
      : await translateStore.add_TRHELPEXEC(body);
    setLoading(false);
    if (res?.isSucceed) {
      console.log("data is saved");
    }
  };

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
              gap: "12px"
            }}>
            <Title>תרגום עזרות לישויות</Title>
            <Button
              style={{ width: 220, marginInlineStart: "auto" }}
              onClick={() => switchTranslationLang(2)}
              active={lang === 2}>
              HE to EN
            </Button>
            <Button
              style={{ width: 220, marginInlineEnd: "auto" }}
              onClick={() => switchTranslationLang(1)}
              active={lang === 1}>
              EN to HE
            </Button>
          </div>
          <ul style={{ padding: 0 }}>
            {items?.map((item, index) => {
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
                  <Input
                    label={cleanText}
                    direction={lang === 2 ? "ltr" : "rtl"}
                    value={
                      (translation && translation[index]?.data) ||
                      translationValue
                    }
                    type="text"
                    onChange={(e) => {
                      translate({
                        ENAME: item.ENAME,
                        TYPE: item.TYPE,
                        value: e.target.value
                      });
                      setIsUpdate(!!translationValue);
                    }}
                  />
                  <Button
                    width={"12%"}
                    onClick={() => handleInputTranslate(index)}
                    style={{ alignSelf: "flex-end" }}>
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

export default inject("translateStore")(observer(Screens));
