
const index = (req, res) => {
    res.render('index', { title: "Homepage", user: req.session.user })
}
const missingdb = (req, res) => {
    res.render('missingdb', { title: "Database error" })
}

module.exports = {
    index,
    missingdb
}