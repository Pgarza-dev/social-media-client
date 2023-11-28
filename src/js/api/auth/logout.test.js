import { logout } from "./logout.js"; // Import the logout function

global.localStorage = {
  removeItem: jest.fn(),
};

describe("logout function", () => {
  beforeEach(() => {
    global.localStorage.removeItem.mockClear();
  });

  it("should remove the token from local storage", () => {
    logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
  });
});
