const AddUrlchild = (old = {}) => {

    return {
        ...old,
        path:"/addurl",
        lazy: async () => ({
        Component: (await import("./AddUrl")).default,
    })
    }
}

export default AddUrlchild