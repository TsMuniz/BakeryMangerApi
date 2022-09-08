const config = {  
    dialect: "mysql", 
    host: "localhost",
    username: "root",
    password:"root",
    database: "BakeryManager",
    define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true,
    }  
}

module.exports = config



