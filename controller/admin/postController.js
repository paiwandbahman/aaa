const Post = require('../../models/Post')

exports.index = async (req, res) => {
    let posts = await Post.find();
    res.json({
        data: posts
    })
}

exports.store = (req, res) => {

    const post = new Post();

    post.title = req.body.data.title;
    post.description = req.body.data.description;
    post.link = req.body.data.link;
    post.time = req.body.data.time;
    post.photo = req.body.data.photo;
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
            data.title = req.body.data.title;
            data.description = req.body.data.description;
            data.link = req.body.data.link;
            data.time = req.body.data.time;

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