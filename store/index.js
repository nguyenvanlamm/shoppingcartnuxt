import state from "~/store/state";
import actions from "~/store/actions";
import mutations from "~/store/mutations";
import getters from "~/store/getters";

const storeConfig = {
  state,
  mutations,
  actions,
  getters
}

export default {
  storeConfig
}
