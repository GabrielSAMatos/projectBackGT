const connection = require('../config/connection');

require('../models/CategoryModel');
require('../models/ProductModel');
require('../models/UserModel');


connection.sync({force:true});