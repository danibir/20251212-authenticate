
const index = (req, res) => {
    res.render('index', { title: "Homepage" })
}

module.exports = {
    index
}