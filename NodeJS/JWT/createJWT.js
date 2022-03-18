const jwt = require('jsonwebtoken');
registerSchema.methods.generateToken = function () {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, 'PrivateTokenKey');
    return token;
}