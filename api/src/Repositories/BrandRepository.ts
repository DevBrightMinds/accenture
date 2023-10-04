import MySQLConfig from "../DBConfig/MySQLConfig";

import { IBrandRepository } from "../Inferfaces/IBrandRepository";

class BrandRepository extends MySQLConfig implements IBrandRepository {
    constructor() {
        super();
    }

    // since this class implements the IBrandRepository - we have to define the methods that are in the interface
    async GetAll() {
        const connection = this.MySQLConnection.createConnection(this.Params); // establish the connection

        // execute the query
        return new Promise((resolve: any, reject: any) => {
            connection.query("SELECT * FROM brands",
                (error: any, results: any) => {
                    if (error)
                        reject(error);
                    else
                        resolve(results);

                    connection.end(); // close the connections at the end

                })
        });
    }

    async GetBrand(id: number) {
        const connection = this.MySQLConnection.createConnection(this.Params); // establish the connection

        // execute the query
        return new Promise((resolve: any, reject: any) => {
            connection.query("SELECT * FROM brands WHERE ID = ?",
                [id],
                (error: any, results: any) => {
                    if (error)
                        reject(error);
                    else
                        resolve(results);

                    connection.end(); // close the connections at the end

                })
        });
    }
}

export default BrandRepository;