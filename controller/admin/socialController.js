const Social = require('../../models/Social')

exports.index = async (req, res) => {
    let socials = await Social.find();
    res.json({
        data: socials
    })
}

exports.store = (req, res) => {

    const social = new Social();

    social.title = req.body.title;
    social.description = req.body.description;
    social.link = req.body.link;

    req.files.forEach((file) => {
        social.photo.push(file.filename)
    })
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
            data.title = req.body.title;
            data.description = req.body.description;
            data.link = req.body.link;

            if (req.files.length > 0) {
                data.photo = []

                req.files.forEach((file) => {
                    data.photo.push(file.filename)
                })
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