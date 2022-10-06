import { Oak } from "./deps.ts";

const router = new Oak.Router();

const colors: any = [];

router
  .get("/", (ctx: any) => {
    ctx.response.body = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Document</title>
  </head>
  <body style="background-color: black; color: white" class="container" >
  <form class="m-4 p-4" action="/" method="post" >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Ingrese un color en inglés.</label>
    <input type="text" class="form-control" id="color" name="color" aria-describedby="emailHelp">
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
<ul class="list-group m-4 p-4">
${colors
  ?.map((color: String) => {
    return `<li style="background-color:${color};" class="list-group-item m-1">${color}</li>`;
  })
  .join("")}
</ul>
<script>
window.onload = function() {
    document.getElementById("color").focus();
}
</script>
  </body>

  </html>`;
  })
  .post("/", async (ctx: any) => {
    const body = await ctx.request.body().value;
    const color = body.get("color");
    colors.push(color);
    ctx.response.redirect("/");
  });

export default router;
