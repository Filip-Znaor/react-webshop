function Page() {
    const fakeProps = {
        title: "Some title", 
        description: "Lorem impsum description"
    }

    //const title = fakeProps.title;
    //const description = fakeProps.description;

    const {title, description} = fakeProps; //destructuring components
    return (
        <>
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>This is a page component</h2>
        </>
    )
}

export { Page }