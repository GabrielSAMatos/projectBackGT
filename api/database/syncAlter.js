const connection = require('../config/connection');

require('../models/UserModel');
require('../models/CategoryModel');
require('../models/ProductModel');
require('../models/ImgProductModel');
require('../models/OptionsModel');




connection.sync({alter:true});