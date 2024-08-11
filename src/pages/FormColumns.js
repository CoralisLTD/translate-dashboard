import { useEffect, useState, useMemo } from "react";
import { observer, inject } from "mobx-react";
import { Button, Input } from "../UI";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { TextArea } from "../UI/src/Input";
import { Pagination } from "../components/Pagination";

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

const FormColumns = ({ translateStore }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [lang] = useState(2);
  const [translation, setTranslation] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const [itemsPerPage] = useState(10);

  const fetchData = async (page) => {
    setLoading(true);
    const skip = (page - 1) * itemsPerPage;
    const data = await translateStore.get_TRFORMCLMNS({
      skip,
      limit: itemsPerPage
    });
    const list = data?.filter((item) => {
      if (!item?.TITLE) return false;
      return true;
    });
    setItems(list);
    setPageCount(data?.length < itemsPerPage ? page : page + 1);
    setLoading(false);
  };

  useEffect(() => {
    setTranslation(null);
    fetchData(currentPage);
  }, [currentPage, translateStore]);

  const translate = (params) => {
    const updatedTranslation = {
      ...translation,
      [params.index]: {
        NAME: params.item.NAME,
        FORM: params.item.FORM,
        data: params.value || "",
        isDirty: true,
        isUpdate: params.isUpdate
      }
    };
    setTranslation(updatedTranslation);
  };

  const handleInputTranslate = async (index) => {
    const body = {
      data: {
        TITLE: translation[index]?.data,
        LANG: lang
      },
      FORM: translation[index].FORM,
      NAME: translation[index].NAME,
      LANG: lang
    };
    setIsSaving(true);
    const res = translation[index].isUpdate
      ? await translateStore.update_TRFORMCLMNS(body)
      : await translateStore.add_TRFORMCLMNS(body);
    setIsSaving(false);
    if (res) {
      console.log("data is saved");
      fetchData(currentPage);
      translation[index].isDirty = false;
    }
  };

  const memoizedItems = useMemo(() => items, [items]);

  return (
    <>
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
                gap: "224px",
                alignItems: "center"
              }}>
              <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                בחזרה לדף הראשי
              </div>
              <Title>תרגום לעמודות של טפסים</Title>
            </div>
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
              {memoizedItems?.map((item, index) => {
                let translationValue;
                let hasTranslation = false;

                if (item.LANGFORMCLMNS_SUBFORM?.length > 0) {
                  hasTranslation = true;
                  const translations = item.LANGFORMCLMNS_SUBFORM.find(
                    (it) => it.LANG === 2
                  );
                  if (translations) {
                    translationValue = translations.TITLE;
                  }
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
                    {item?.TITLE?.length <= 130 ? (
                      <Input
                        label={item?.TITLE}
                        direction={lang === 2 ? "ltr" : "rtl"}
                        value={
                          translation && translation[index]
                            ? translation[index]?.data
                            : translationValue
                        }
                        type="text"
                        onChange={(e) => {
                          translate({
                            index,
                            item,
                            value: e.target.value,
                            isUpdate: !!hasTranslation
                          });
                        }}
                      />
                    ) : (
                      <TextArea
                        label={item?.TITLE}
                        rows={Math.ceil(item?.TITLE?.length / 80)}
                        direction={lang === 2 ? "ltr" : "rtl"}
                        value={
                          translation && translation[index]
                            ? translation[index]?.data
                            : translationValue
                        }
                        style={{
                          height: "100%",
                          textAlign: lang === 2 ? "end" : "start"
                        }}
                        onChange={(e) => {
                          translate({
                            index,
                            item,
                            value: e.target.value,
                            isUpdate: !!hasTranslation
                          });
                        }}
                      />
                    )}
                    <Button
                      width={"12%"}
                      onClick={() => handleInputTranslate(index)}
                      disabled={
                        translation ? !translation[index]?.isDirty : true
                      }
                      style={{ alignSelf: "flex-start" }}>
                      {isSaving && (
                        <div>
                          <ClipLoader color={"white"} />
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
        {isLoading ? (
          <></>
        ) : (
          <Button
            width={"12%"}
            onClick={async () => {
              Object.entries(translation).map((item, index) => {
                handleInputTranslate(index);
              });
            }}
            disabled={translation === null}
            style={{ alignSelf: "flex-start" }}>
            {isSaving && (
              <div>
                <ClipLoader color={"white"} />
              </div>
            )}
            שמור הכל
          </Button>
        )}
      </List>
      {isLoading ? (
        <></>
      ) : (
        <Pagination
          pageCount={pageCount}
          pageName={location.pathname}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default inject("translateStore")(observer(FormColumns));
