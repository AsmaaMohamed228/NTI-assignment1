 async function retrieveData(url){
     //const url="https://fakestoreapi.com/products";
     

   try{
     const response=await fetch(url);
     
     const data=await response.json();

     //console.log(data);
     return data;

   }catch(e){
     console.log(e);
   }

 }

async function setText(){
 const result= await retrieveData("https://fakestoreapi.com/products/1");

 const category = document.getElementById("category");
 const description = document.getElementById("description");
 const id = document.getElementById("id");
 const image = document.getElementById("image");
 const price = document.getElementById("price");
 const rating = document.getElementById("rating");
 const title = document.getElementById("title");

 category.textContent= result["category"];
 description.textContent= result["description"];
 id.textContent= result["id"];
 image.textContent= result["image"];
 price.textContent= result["price"];
 rating.textContent= result.rating;
 title.textContent= result.title;
}

setText();