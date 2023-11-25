const path = require('path');
exports.contactUsPage = (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'view', 'contactus.html'));
};