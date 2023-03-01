import { renderHook, act } from "@testing-library/react-hooks/dom";
import usePeople from "./People";

describe("usePeople", () => {
  it("should increment counter", () => {
    const { result } = renderHook(() => usePeople());

    act(() => {
      result.current.setPersistedPeople({
        _id: "ae736d8f-5a08-4bab-8e30-1eb2079e5dc2",
        name: {
          last: "Li",
          first: "Tony",
        },
        email: "tingfung.tony@gmail.com",
        picture: "https://placebear.com/225/210",
        location: {
          latitude: 22.38,
          longitude: null,
        },
      });
    });

    expect(result.current.people._id).equal(
      "ae736d8f-5a08-4bab-8e30-1eb2079e5dc2"
    );
  });
});
