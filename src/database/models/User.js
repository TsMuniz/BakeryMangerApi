import Sequelize,{ Model } from 'sequelize'

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            role: Sequelize.ENUM("admin", "manager","developer"),
            status: Sequelize.ENUM("active","archived"),
        },
        {
            modelName: "users",
            sequelize,
            name: {
                singular: "user",
                plural: "users"
            }
        })
    }

    static associate(models) {
        this.hasMany(models.Project)
    }
}

export default User