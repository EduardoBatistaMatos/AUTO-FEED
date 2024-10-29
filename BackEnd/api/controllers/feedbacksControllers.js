module.exports = {
    indexFeedbacks
}


function indexFeedbacks(req, res) {
    res.render('feedbacks.ejs', {
        title:"feedbacks",
    })
}