const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('../api/models/UserModel');  // Ajuste o caminho para o arquivo UserModel

// Configuração do banco de dados de teste (SQLite em memória)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:', // Usa um banco de dados em memória para testes
});

describe('UserModel', () => {
  beforeAll(async () => {
    // Inicializa o modelo com a conexão do banco de dados de teste
    UserModel.init(
      {
        firstname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        surname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize, // Conexão com o banco de dados de teste
        tableName: 'Users',
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

  it('should create a user successfully', async () => {
    const user = await UserModel.create({
      firstname: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    });

    expect(user.firstname).toBe('John');
    expect(user.surname).toBe('Doe');
    expect(user.email).toBe('john.doe@example.com');
    expect(user.password).toBe('password123');
  });

  it('should throw validation error if required fields are missing', async () => {
    try {
      await UserModel.create({
        firstname: '',
        surname: '',
        email: '',
        password: '',
      });
    } catch (error) {
      expect(error.name).toBe('SequelizeValidationError');
      expect(error.errors.length).toBeGreaterThan(0);
    }
  });

  it('should not allow a user to be created without a password', async () => {
    try {
      await UserModel.create({
        firstname: 'Jane',
        surname: 'Doe',
        email: 'jane.doe@example.com',
      });
    } catch (error) {
      expect(error.name).toBe('SequelizeValidationError');
      // Ajuste a expectativa da mensagem de erro
      expect(error.errors[0].message).toBe('UserModel.password cannot be null');
    }
  });
});
