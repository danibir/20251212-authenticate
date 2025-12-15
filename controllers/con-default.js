
const index = (req, res) => {
    res.render('index', { title: "Homepage" })
}
const missingdb = (req, res) => {
    res.render('missingdb', { title: "Database error" })
}

module.exports = {
    index,
    missingdb
}