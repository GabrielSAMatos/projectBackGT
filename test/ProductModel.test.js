const { Sequelize, DataTypes } = require('sequelize');
const ProductModel = require('../api/models/ProductModel');  // Ajuste o caminho para o arquivo ProductModel

// Configuração do banco de dados de teste (SQLite em memória)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:', // Usa um banco de dados em memória para testes
});

describe('ProductModel', () => {
  beforeAll(async () => {
    // Inicializa o modelo com a conexão do banco de dados de teste
    ProductModel.init(
      {
        enabled: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        slug: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        use_in_menu: {
          type: DataTypes.BOOLEAN(),
          defaultValue: false,
        },
        stock: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        description: {
          type: DataTypes.STRING,
          defaultValue: '',
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        price_with_discount: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'products',
        timestamps: true,
      }
    );

    // Sincroniza os modelos com o banco de dados
    await sequelize.sync();
  });

  afterAll(async () => {
    // Fecha a conexão com o banco de dados após os testes
    await sequelize.close();
  });

  it('should create a product successfully', async () => {
    const product = await ProductModel.create({
      name: 'Product A',
      slug: 'product-a',
      price: 100.0,
      price_with_discount: 90.0,
    });

    expect(product.name).toBe('Product A');
    expect(product.slug).toBe('product-a');
    expect(product.price).toBe(100.0);
    expect(product.price_with_discount).toBe(90.0);
  });

  it('should throw validation error if required fields are missing', async () => {
    try {
      await ProductModel.create({
        name: '',
        slug: '',
        price_with_discount: 90.0,
      });
    } catch (error) {
      expect(error.name).toBe('SequelizeValidationError');
      expect(error.errors.length).toBeGreaterThan(0);
    }
  });

  it('should not allow creation of product without price', async () => {
    try {
      await ProductModel.create({
        name: 'Product B',
        slug: 'product-b',
        price_with_discount: 80.0,
      });
    } catch (error) {
      expect(error.name).toBe('SequelizeValidationError');
      expect(error.errors[0].message).toBe('ProductModel.price cannot be null');
    }
  });

  it('should not allow creation of product without price_with_discount', async () => {
    try {
      await ProductModel.create({
        name: 'Product C',
        slug: 'product-c',
        price: 200.0,
      });
    } catch (error) {
      expect(error.name).toBe('SequelizeValidationError');
      expect(error.errors[0].message).toBe('ProductModel.price_with_discount cannot be null');
    }
  });
});
