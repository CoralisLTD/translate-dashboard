import { types } from "mobx-state-tree";
import fetcher from "../utils/fetcher";

const TranslateStore = types
  .model("TranslateStore", {})
  .actions((self) => {
    const get_TREXTMSG = async (data) => {
      self.setError("");
      const response = await fetcher().post(data).from.translate.get_TREXTMSG();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_get_TREXTMSG"
            : "error:error_failed_get_TREXTMSG"
        );
      }
    };

    // TREXEC
    const get_TREXEC = async (data) => {
      self.setError("");
      const response = await fetcher().post(data).from.translate.get_TREXEC();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_get_TREXEC"
            : "error:error_failed_get_TREXEC"
        );
      }
    };

    const add_TREXEC = async (data) => {
      self.setError("");
      const response = await fetcher().post(data).from.translate.add_TREXEC();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_add_TREXEC"
            : "error:error_failed_add_TREXEC"
        );
      }
    };

    const update_TREXEC = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.update_TREXEC();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_update_TREXEC"
            : "error:error_failed_update_TREXEC"
        );
      }
    };
    // TRPROGPARAM
    const get_TRPROGPARAM = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.get_TRPROGPARAM();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_get_TRPROGPARAM"
            : "error:error_failed_get_TRPROGPARAM"
        );
      }
    };

    const add_TRPROGPARAM = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.add_TRPROGPARAM();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_add_TRPROGPARAM"
            : "error:error_failed_add_TRPROGPARAM"
        );
      }
    };

    const update_TRPROGPARAM = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.update_TRPROGPARAM();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_update_TRPROGPARAM"
            : "error:error_failed_update_TRPROGPARAM"
        );
      }
    };

    // TRFORMCLMNS
    const get_TRFORMCLMNS = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.get_TRFORMCLMNS();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_get_TRFORMCLMNS"
            : "error:error_failed_get_TRFORMCLMNS"
        );
      }
    };

    const add_TRFORMCLMNS = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.add_TRFORMCLMNS();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_add_TRFORMCLMNS"
            : "error:error_failed_add_TRFORMCLMNS"
        );
      }
    };

    const update_TRFORMCLMNS = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.update_TRFORMCLMNS();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_update_TRFORMCLMNS"
            : "error:error_failed_update_TRFORMCLMNS"
        );
      }
    };
    //  TRREPCLMNS
    const get_TRREPCLMNS = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.get_TRREPCLMNS();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_get_TRREPCLMNS"
            : "error:error_failed_get_TRREPCLMNS"
        );
      }
    };

    const add_TRREPCLMNS = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.add_TRREPCLMNS();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_add_TRREPCLMNS"
            : "error:error_failed_add_TRREPCLMNS"
        );
      }
    };

    const update_TRREPCLMNS = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.update_TRREPCLMNS();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_update_TRREPCLMNS"
            : "error:error_failed_update_TRREPCLMNS"
        );
      }
    };

    // TRCOLUMNS
    const get_TRCOLUMNS = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.get_TRCOLUMNS();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_get_TRCOLUMNS"
            : "error:error_failed_get_TRCOLUMNS"
        );
      }
    };

    const add_TRCOLUMNS = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.add_TRCOLUMNS();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_add_TRCOLUMNS"
            : "error:error_failed_add_TRCOLUMNS"
        );
      }
    };

    const update_TRCOLUMNS = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.update_TRCOLUMNS();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_update_TRCOLUMNS"
            : "error:error_failed_update_TRCOLUMNS"
        );
      }
    };

    // TRREPTITLE
    const get_TRREPTITLE = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.get_TRREPTITLE();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_get_TRREPTITLE"
            : "error:error_failed_get_TRREPTITLE"
        );
      }
    };

    const add_TRREPTITLE = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.add_TRREPTITLE();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_add_TRREPTITLE"
            : "error:error_failed_add_TRREPTITLE"
        );
      }
    };

    const update_TRREPTITLE = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.update_TRREPTITLE();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_update_TRREPTITLE"
            : "error:error_failed_update_TRREPTITLE"
        );
      }
    };

    // טבלאות
    const get_TRCATALOG = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.get_TRCATALOG();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_get_TRCATALOG"
            : "error:error_failed_get_TRCATALOG"
        );
      }
    };

    const add_TRCATALOG = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.add_TRCATALOG();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_add_TRCATALOG"
            : "error:error_failed_add_TRCATALOG"
        );
      }
    };

    const update_TRCATALOG = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.update_TRCATALOG();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_update_TRCATALOG"
            : "error:error_failed_update_TRCATALOG"
        );
      }
    };

    const get_TRTRIGMSG = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.get_TRTRIGMSG();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_get_TRTRIGMSG"
            : "error:error_failed_get_TRTRIGMSG"
        );
      }
    };

    const get_TRHELPFORM = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.get_TRHELPFORM();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_get_TRHELPFORM"
            : "error:error_failed_get_TRHELPFORM"
        );
      }
    };

    const get_TRHELPEXEC = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.get_TRHELPEXEC();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_get_TRHELPEXEC"
            : "error:error_failed_get_TRHELPEXEC"
        );
      }
    };

    const get_TRHELPPROGRAM = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.get_TRHELPPROGRAM();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_get_TRHELPPROGRAM"
            : "error:error_failed_get_TRHELPPROGRAM"
        );
      }
    };

    const add_TREXTMSG = async (data) => {
      self.setError("");
      const response = await fetcher().post(data).from.translate.add_TREXTMSG();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_add_TREXTMSG"
            : "error:error_failed_add_TREXTMSG"
        );
      }
    };

    const add_TRTRIGMSG = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.add_TRTRIGMSG();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_add_TRTRIGMSG"
            : "error:error_failed_add_TRTRIGMSG"
        );
      }
    };

    const add_TRHELPFORM = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.add_TRHELPFORM();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_add_TRHELPEXEC"
            : "error:error_failed_add_TRHELPEXEC"
        );
      }
    };

    const add_TRHELPEXEC = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.add_TRHELPEXEC();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_add_TRHELPEXEC"
            : "error:error_failed_add_TRHELPEXEC"
        );
      }
    };

    const add_TRHELPPROGRAM = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.add_TRHELPPROGRAM();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_add_TRHELPPROGRAM"
            : "error:error_failed_add_TRHELPPROGRAM"
        );
      }
    };

    const update_TREXTMSG = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.update_TREXTMSG();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_update_TREXTMSG"
            : "error:error_failed_update_TREXTMSG"
        );
      }
    };

    const update_TRTRIGMSG = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.update_TRTRIGMSG();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_add_TRTRIGMSG"
            : "error:error_failed_add_TRTRIGMSG"
        );
      }
    };

    const update_TRHELPFORM = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.update_TRHELPFORM();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_update_TRHELPEXEC"
            : "error:error_failed_update_TRHELPEXEC"
        );
      }
    };

    const update_TRHELPEXEC = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.update_TRHELPEXEC();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_update_TRHELPEXEC"
            : "error:error_failed_update_TRHELPEXEC"
        );
      }
    };

    const update_TRHELPPROGRAM = async (data) => {
      self.setError("");
      const response = await fetcher()
        .post(data)
        .from.translate.update_TRHELPPROGRAM();
      if (response?.status === 200 && response?.data) {
        return response.data;
      } else {
        self.setError(
          response?.status === 400 || response?.status === 500
            ? response?.data?.FORM?.InterfaceErrors?.text ||
                "error:error_failed_update_TRHELPPROGRAM"
            : "error:error_failed_update_TRHELPPROGRAM"
        );
      }
    };

    const setError = (error) => {
      self.error = error;
    };

    return {
      setError,
      get_TRFORMCLMNS,
      get_TRREPCLMNS,
      get_TREXEC,
      get_TRREPTITLE,
      get_TRPROGPARAM,
      get_TREXTMSG,
      get_TRCOLUMNS,
      get_TRCATALOG,
      get_TRTRIGMSG,
      get_TRHELPFORM,
      get_TRHELPEXEC,
      get_TRHELPPROGRAM,
      add_TRFORMCLMNS,
      add_TRREPCLMNS,
      add_TREXEC,
      add_TRREPTITLE,
      add_TRPROGPARAM,
      add_TREXTMSG,
      add_TRCOLUMNS,
      add_TRCATALOG,
      add_TRTRIGMSG,
      add_TRHELPFORM,
      add_TRHELPEXEC,
      add_TRHELPPROGRAM,
      update_TRREPCLMNS,
      update_TRFORMCLMNS,
      update_TREXEC,
      update_TRREPTITLE,
      update_TRPROGPARAM,
      update_TRCATALOG,
      update_TREXTMSG,
      update_TRCOLUMNS,
      update_TRTRIGMSG,
      update_TRHELPFORM,
      update_TRHELPEXEC,
      update_TRHELPPROGRAM
    };
  })
  .views((self) => ({
    get isError() {
      return !!self.error;
    }
  }));

const translateStore = TranslateStore.create({});

export default translateStore;
