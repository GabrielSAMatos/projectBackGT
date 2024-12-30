const connection = require('../config/connection');

require('../models/CategoryModel');
require('../models/ProductModel');
require('../models/UserModel');
require('../models/ImgProductModel');



connection.sync({force:true});