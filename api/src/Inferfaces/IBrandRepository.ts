// ofcourse you could add other method descriptions here such as post, update delete
export interface IBrandRepository {
    GetAll: () => any, // get every brand
    GetBrand: (id:number) => any; // filter using this
}