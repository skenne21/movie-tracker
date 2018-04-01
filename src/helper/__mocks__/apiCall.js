export const postCreateUser = jest.fn().mockImplementation(() => {
  return {
    status: "true",
    data: {
      id: 13,
      name: "bob",
      password: "bugslife",
      email: "jhon@aol.col"
    }
  }
})

export const signIn = jest.fn().mockImplementation(() => {
  return {
    status: "success",
    data: {
      id: 13,
      name: "bob",
      password: "bugs456",
      email: "jhonson@aol.col"
    }
  }
})
