

 let products = [];
 class ProductManager{
   
     constructor(title,descripcion,price,thumbnail,code, stock) {
     this.title = title;
     this.descripcion = descripcion;
     this.price = price;
     this.thumbnail = thumbnail;
     this.code = code
     this.stock = stock;
  }
  

 //metodo 
  getProducts() {

    console.log(products)

     };


 addProduct (){
      let item1 = {title: 'prueba', descripcion: 'este es una prueba', price: 200, thumbnail: 'sin imagen', code:1, stock:25}
    products.push (item1) 

    
     };

  getProducts() {
    console.log(products)
     };
 getProductById(){
if (this.code&&this.code)
{
return this.code
    }
    else {
      console.log('No existe lo que buscas')
    }

   

 } 
}
 
let instancia1 = new ProductManager();
instancia1.getProducts();
instancia1.addProduct();
instancia1.getProducts();
instancia1.getProductById(2);
console.log(instancia1);