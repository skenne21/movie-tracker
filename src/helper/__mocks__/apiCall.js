export const postCreateUser = jest.fn()
  .mockImplementationOnce(() => ({
    error: "An error happened"
  }))
  .mockImplementationOnce(() => ({
    status: "true",
    data: {
      id: 13,
      name: "bob",
      password: "bugslife",
      email: "jhon@aol.col"
    }
  }))

export const signIn = jest.fn()
  .mockImplementationOnce(() => ({
    status: "success",
    data: {
      id: 13,
      name: "bob",
      password: "bugs456",
      email: "jhonson@aol.col"
    }
   }))
