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
      get_TREXTMSG,
      get_TRTRIGMSG,
      get_TRHELPFORM,
      get_TRHELPEXEC,
      get_TRHELPPROGRAM,
      add_TREXTMSG,
      add_TRTRIGMSG,
      add_TRHELPFORM,
      add_TRHELPEXEC,
      add_TRHELPPROGRAM,
      update_TREXTMSG,
      update_TRTRIGMSG,
      update_TRHELPFORM,
      update_TRHELPEXEC,
      update_TRHELPPROGRAM,
    };
  })
  .views((self) => ({
    get isError() {
      return !!self.error;
    },
  }));

const translateStore = TranslateStore.create({});

export default translateStore;
