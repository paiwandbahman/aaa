const Social = require('../../models/Social')

exports.index = async (req, res) => {
    let socials = await Social.find();
    res.json({
        data: socials
    })
}

exports.store = (req, res) => {

    const social = new Social();

    social.title = req.body.data.title;
    social.description = req.body.data.description;
    social.link = req.body.data.link;
    social.photo = req.body.data.photo;

    social.save();


    return res.json({
        msg: 'success'
    })
};


exports.edit = (req, res) => {
    Social.findById(req.params.id).then((data) => {
        if (data) {
            res.json({
                data: data
            });
        }
    }).catch(() => {
        console.log('not found')
        return res.json({
            msg: 'error notfound'
        })
    })

};

exports.update = (req, res) => {
    Social.findById(req.params.id).then((data) => {
        if (data) {
            data.title = req.body.data.title;
            data.description = req.body.data.description;
            data.link = req.body.data.link;

            if (req.body.data.photo.length > 0) {
                data.photo = req.body.data.photo;
            }

            data.save();


            res.json({
                msg: 'updated successfully'
            });
        }
    }).catch((err) => {
        console.log(err)
        return res.json({
            msg: 'error notfound'
        })
    })


};

exports.delete = (req, res) => {
    Social.findById(req.params.id).then((data) => {
        if (data) {
            data.delete();
            res.json({
                msg: 'data has been deleted'
            });
        }
    })

}