import ConfigureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

export const mockStore = ConfigureMockStore([thunk]);