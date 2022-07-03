const Slide = require('../../models/Slide')

exports.index = async (req, res) => {
    let slides = await Slide.find();
    res.json({
        data: slides
    })
}

exports.store = (req, res) => {

    const slide = new Slide();

    slide.photo = req.file.filename;

    slide.save();


    return res.json({
        msg: 'success'
    })
};





exports.delete = (req, res) => {
    Slide.findById(req.params.id).then((data) => {
        if (data) {
            data.delete();
            res.json({
                msg: 'data has been deleted'
            });
        }
    })

}