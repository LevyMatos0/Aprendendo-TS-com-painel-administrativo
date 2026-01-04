Bun.serve({
  port: 3000,

  fetch(req) {
    const url = new URL(req.url);

    // Servir o HTML
    if (url.pathname === "/") {
      return new Response(
        Bun.file("../frontend/index.html"),
        {
          headers: { "Content-Type": "text/html" }
        }
      );
    }
  
   
    
    if(url.pathname=== "/verificar"){
      
      const idade=(url.searchParams.get('idade'));

      if (idade === null){
  return new Response("Escreve algo certo")
 }

      const idadeNumero = Number(idade);


 
 if(isNaN(idadeNumero)){
return new  Response("Escreve algo valido")
 }

     if(idadeNumero>18){
      return new Response("É maior");
    }
  else
      return new Response("É menor");



    }

    return new Response("Not Found", { status: 404 });
  }
});
