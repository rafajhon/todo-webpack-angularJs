'use strict'

export default class  RequestService{

    constructor( $http) {
        this._http = $http;
    }

    request(){
        console.log("teste");
    }
    
    teste(){
        return 10;
    }
}