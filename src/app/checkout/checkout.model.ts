export class CHECKOUT{
    private email : string;
    private phone : string;
    private name : string;
    private address : string;
    private city : string;
    private country : string;
    private postalcode : string;

    constructor(email : string , phone : string , name : string , address : string , city :string , country :string , postalcode :string){
        this.email=email;
        this.phone =phone;
        this.name=name;
        this.address =address;
        this.city = city;
        this.country =country;
        this.postalcode =postalcode;
    }
}