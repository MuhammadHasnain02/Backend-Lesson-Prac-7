
const homePage = (req, res) => {
    res.send("Home Page");
}

const aboutPage = (req, res) => {
    res.send("About Page");
}

const contactPage = (req, res) => {
    res.send("Contact Page");
}

export { homePage , aboutPage , contactPage }
