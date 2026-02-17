const {nanoid} = require("nanoid")
const URL = require("./url_Schema")


async function generateNewShortUrl(req,res) {
    const body = req.body
    if(!body.url) return res.status(400).json({error: "url is required"})
    const shortId = nanoid(8)
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: []
    })

    return res.json({id : shortId})
}

async function analytics (req,res) {
    const shortId = req.params.shortId
    const result = await URL.findOne({shortId})
    return res.json({
        totalclicks : result.visitHistory.length,
        data: result.visitHistory
    })
}
async function redirect(req,res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId: shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        }
    );

    if (!entry) {
        return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectURL);
}

module.exports = {
    generateNewShortUrl,
    analytics,
    redirect
}