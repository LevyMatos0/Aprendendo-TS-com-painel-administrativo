Bun.serve({
  port: 3000,

  fetch(req) {
    const url = new URL(req.url);

    // Rota inicial
    if (url.pathname === "/") {
      return new Response("Página inicialasd");
    }

    // Rota de lista
    if (url.pathname === "/lista") {
      return new Response("Lista de cadastros");
    }

    if (url.pathname === '/cadastro'){
        return new Response('Tela de cadastro')
     
    }

      if (url.pathname === '/post' && req.method === "POST"){
       
        const n1=Number(1);
        const n2=Number(2);
         
        function soma(n1:number, n2:number):number{
            return n1 + n2;
        }
        console.log(soma(n1, n2));

        return new Response("Resultado"+ soma(n1,n2))
    }


    return new Response("Rota não encontrada", { status: 404 });
  },
});
