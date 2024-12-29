const connection = require('../config/connection');

require('../models/CategoryModel');


connection.sync({alter:true})