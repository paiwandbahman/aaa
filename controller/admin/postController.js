const Post = require('../../models/Post')

exports.index = async (req, res) => {
    let posts = await Post.find();
    res.json({
        data: posts
    })
}

exports.store = (req, res) => {

    const post = new Post();

    post.title = req.body.title;
    post.description = req.body.description;
    post.link = req.body.link;
    post.time = req.body.time;

    req.files.forEach((file) => {
        post.photo.push(file.filename)
    })
    post.save();


    return res.json({
        msg: 'success'
    })
};


exports.edit = (req, res) => {
    Post.findById(req.params.id).then((data) => {
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
    Post.findById(req.params.id).then((data) => {
        if (data) {
            data.title = req.body.title;
            data.description = req.body.description;
            data.link = req.body.link;
            data.time = req.body.time;

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


    // Post.findByIdAndUpdate(req.params.id, {
    //     title: req.body.title,
    //     description: req.body.description,
    //     link: req.body.link,
    //     time: req.body.time
    // }, function (err, place) {
    //     res.send(place);
    // });

};

exports.delete = (req, res) => {
    Post.findById(req.params.id).then((data) => {
        if (data) {
            data.delete();
            res.json({
                msg: 'data has been deleted'
            });
        }
    })

}


exports.check = (req, res) => {
    return res.json({
        check: true
    })
};