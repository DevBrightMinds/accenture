import { IMySQLDBConfigParams } from "../Inferfaces/IMySQLDBConfigParams";

const mysql = require("mysql");
const DotEnv = require("dotenv").config().parsed;

// this is the DB configuration - we need this to have access to the DB
// we also have access to the .env file where we define most secret items  such as db names and passwords

class MySqlDBConfig {
    ENVVariables: any;
    MySQLConnection: any;
    Params: IMySQLDBConfigParams = {} as IMySQLDBConfigParams;

    constructor() {
        this.ENVVariables = DotEnv;
        this.MySQLConnection = mysql;
        
        this.Params = {
            host: this.ENVVariables.host,
            user: this.ENVVariables.username,
            password: this.ENVVariables.password,
            database: this.ENVVariables.database,
            multipleStatements: true,
        };
    }
}

export default MySqlDBConfig;
