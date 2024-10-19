function init() {
  let contador = 0;
  
  const botonRojo = document.getElementById("boton-rojo");
  const botonVerde = document.getElementById("boton-verde");
  const titulo = document.getElementById("titulo");
  
  if (botonRojo && botonVerde && titulo) {
    botonRojo.addEventListener("click", function() {
      contador++;
      if (contador <= 6) {
        botonVerde.style.transform = `scale(${1 + contador * 0.05})`;
        botonRojo.style.transform = `scale(${1 - contador * 0.1})`;
      } else {
        botonRojo.style.display = "none";
        titulo.innerHTML = "No te hagas la de rogar vv";
      }
    });
    
    botonVerde.addEventListener("click", function() {
      const pantallaOk = document.createElement("div");
      pantallaOk.innerHTML = "<h1 style='text-align: center; margin-top: 200px;'>Ok vro</h1>";
      const botonVolver = document.createElement("button");
      botonVolver.id = "volver";
      botonVolver.textContent = "Quieres volver a tratar";
      pantallaOk.appendChild(botonVolver);
      document.body.innerHTML = "";
      document.body.appendChild(pantallaOk);
      
      botonVolver.addEventListener("click", function() {
        document.body.innerHTML = `
          <header>
            <h1 id="titulo">Me amas?</h1>
          </header>
          <main>
            <button id="boton-verde" style="background-color: green;">Sí mi bebesito :3</button>
            <button id="boton-rojo" style="background-color: red;">No por frenton</button>
          </main>
        `;
        init(); // Llama a la función init() para volver a agregar eventos
      });
    });
  } else {
    console.error("Elementos no encontrados");
  }
}

init(); // Llama a la función init() al cargar la página
