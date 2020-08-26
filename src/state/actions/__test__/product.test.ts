import mockAxios from "axios";
import { setError, setLoading, getProductList } from "../product";
import {
  PRODUCT_LIST_RESULT_FAILED,
  PRODUCT_LIST_RESULT_LOADING,
  PRODUCT_LIST_RESULT_SUCCESS,
  PRODUCT_LIST_META,
} from "../types";
import { mockStore, initialMockState, successMockState } from "../../../test";

const store = mockStore(initialMockState);

describe("setError", () => {
  it("returns action with correct type and payload", () => {
    const action = setError("test error");
    expect(action.type).toEqual(PRODUCT_LIST_RESULT_FAILED);
    expect(action.payload).toEqual("test error");
  });
});

describe("setLoading", () => {
  it("returns action with correct type and payload", () => {
    const action = setLoading();
    expect(action.type).toEqual(PRODUCT_LIST_RESULT_LOADING);
  });
});

describe("getProductList", () => {
  beforeEach(() => {
    (mockAxios.get as jest.Mock).mockClear();
    store.clearActions();
  });

  it("should dispatch loading, success and meta actions in correct order with correct payload", async () => {
    (mockAxios.get as jest.Mock).mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          results: successMockState.productList.page,
          metadata: successMockState.productList.meta,
        },
      });
    });

    await store.dispatch(getProductList() as any);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(store.getActions().length).toEqual(3);
    expect(store.getActions()[0].type).toEqual(PRODUCT_LIST_RESULT_LOADING);
    expect(store.getActions()[1].type).toEqual(PRODUCT_LIST_RESULT_SUCCESS);
    expect(store.getActions()[1].payload).toEqual(
      successMockState.productList.page
    );
    expect(store.getActions()[2].type).toEqual(PRODUCT_LIST_META);
    expect(store.getActions()[2].payload).toEqual(
      successMockState.productList.meta
    );
  });

  it("should dispatch loading and failed actions in case of error", async () => {
    (mockAxios.get as jest.Mock).mockImplementationOnce(() => {
      return Promise.reject(new Error("Failed"));
    });
    await store.dispatch(getProductList() as any);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(store.getActions().length).toEqual(2);
    expect(store.getActions()[0].type).toEqual(PRODUCT_LIST_RESULT_LOADING);
    expect(store.getActions()[1].type).toEqual(PRODUCT_LIST_RESULT_FAILED);
  });
});
