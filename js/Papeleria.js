
                                                    // obtenemos la fecha actual
                                                    const getTime = dateTo => {
                                                      let now = new Date(),
                                                          time = (new Date(dateTo) - now + 1000) / 1000,
                                                          seconds = ('0' + Math.floor(time % 60)).slice(-2),
                                                          minutes = ('0' + Math.floor(time / 60 % 60)).slice(-2),
                                                          hours = ('0' + Math.floor(time / 3600 % 24)).slice(-2),
                                                          days = Math.floor(time / (3600 * 24));
                                                  
                                                      return {
                                                          seconds,
                                                          minutes,
                                                          hours,
                                                          days,
                                                          time
                                                      }
                                                  };
                                                  
                                                  const countdown = (dateTo, element) => {
                                                      const item = document.getElementById(element);
                                                  
                                                      const timerUpdate = setInterval( () => {
                                                          let currenTime = getTime(dateTo);
                                                          item.innerHTML = `
                                                              <div class="row">
                                                                  <div class="col-lg-2">
                                                                      <div class="countdown-container">
                                                                          <div class="number">
                                                                              ${currenTime.days}
                                                                          </div>
                                                                          <div class="concept">
                                                                              Días
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div class="col-lg-2">
                                                                      <div class="countdown-container">
                                                                          <div class="number">
                                                                              ${currenTime.hours}
                                                                          </div>
                                                                          <div class="concept">
                                                                              Horas
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div class="col-lg-2">
                                                                      <div class="countdown-container">
                                                                          <div class="number">
                                                                              ${currenTime.minutes}
                                                                          </div>
                                                                          <div class="concept">
                                                                              Minutos
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                   <div class="col-lg-2">
                                                                       <div class="countdown-container">
                                                                           <div class="number">
                                                                           ${currenTime.seconds}
                                                                           </div>
                                                                           <div class="concept">
                                                                              Segundos
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>`;
                                                  
                                                          if (currenTime.time <= 1) {
                                                              clearInterval(timerUpdate);
                                                              document.write('Fin de la cuenta '+ element);
                                                          }
                                                  
                                                      }, 1000);
                                                  };
                                                  
                                                  // obtenemos la fecha actual
                                                  var date = new Date()
                                                  var new_date1 = new Date(date);
                                                  
                                                  // Obtenemos un numero aleatorio entre 1 y 12
                                                  var add_hours = Math.floor((Math.random()*12)+1);
                                                   
                                                  // Obtenemos un numero aleatorio entre 1 y 60
                                                  var add_days = Math.floor((Math.random()*3)+1);
                                                   
                                                  // Obtenemos un numero aleatorio entre 1 y 13
                                                  var add_months = Math.floor((Math.random()*5)+1);
                                                  
                                                  // Incrementamos las horas
                                                  new_date1.setDate(date.getHours() + add_hours);
                                                  // Incrementamos los dias
                                                  new_date1.setDate(date.getDate() + add_days);
                                                  // Incrementamos los meses
                                                  new_date1.setMonth(date.getMonth() + add_months);
                                                  
                                                  var new_date2 = new Date(date);
                                                  
                                                  // Obtenemos un numero aleatorio entre 1 y 12
                                                  var add_hours = Math.floor((Math.random()*12)+1);
                                                   
                                                  // Obtenemos un numero aleatorio entre 1 y 60
                                                  var add_days = Math.floor((Math.random()*60)+1);
                                                   
                                                  // Obtenemos un numero aleatorio entre 1 y 13
                                                  var add_months = Math.floor((Math.random()*13)+1);
                                                  
                                                  // Incrementamos las horas
                                                  new_date2.setDate(date.getHours() + add_hours);
                                                  // Incrementamos los dias
                                                  new_date2.setDate(date.getDate() + add_days);
                                                  // Incrementamos los meses
                                                  new_date2.setMonth(date.getMonth() + add_months);
                                                  
                                                  var new_date3 = new Date(date);
                                                  new_date3.setMinutes(date.getMinutes() + 1);
                                                  
                                                  // document.getElementById('new_date1').innerHTML = new_date1;
                                                  // document.getElementById('new_date2').innerHTML = new_date2;
                                                  // document.getElementById('new_date3').innerHTML = new_date3;
                                                  
                                                  // countdown(new_date1, 'countdown1');
                                                  countdown(new_date2, 'countdown2');
                                                  // countdown(new_date3, 'countdown3');
let stockProductos = [
  {id: 1, nombre: "Tabla Picar", tipo: "Madera", cantidad: 1, desc: "Diversos tamaños", precio: 16000, autor: "Andres K.",Tiempo:new_date3, img: './assets/img/Tabla.png'},
  {id: 2, nombre: "Imanes", tipo: "Imán", cantidad: 10, desc: "Diversos motivos", precio: 60000, autor: "Noralba H.",Tiempo:new_date3, img: './assets/img/Figuras.png'},
  {id: 3, nombre: "Vajilla", tipo: "Acero", cantidad: 1, desc: "Diversos colores", precio: 650000, autor: "Mariana M.",Tiempo:new_date2, img: './assets/img/Vajilla.png'},
  {id: 4, nombre: "Plato", tipo: "Ceramica", cantidad: 1, desc: "Diversos colores", precio: 596000, autor: "Patricia A.",Tiempo:new_date1, img: './assets/img/Plato.jpg'},
  {id: 5, nombre: "Kit", tipo: "Madera", cantidad: 10, desc: "Diversos utensilios", precio: 70000, autor: "Rocio R.",Tiempo:new_date2, img: './assets/img/Rodillo.png'},
  {id: 6, nombre: "Kit", tipo: "Acero", cantidad: 5, desc: "Diversos utensilios", precio: 90000, autor: "Juan A.",Tiempo:new_date3, img: './assets/img/Decoracion.png'},
  {id: 7, nombre: "Jarra", tipo: "Vidrio", cantidad: 1, desc: "Diversos colores", precio: 90000, autor: "Maria D.",Tiempo:new_date2, img: './assets/img/Jarra.png'},
  {id: 8, nombre: "Jarra", tipo: "Electroplata", cantidad: 1, desc: "Unica", precio: 126400, autor: "Valentina I.",Tiempo:new_date1, img: './assets/img/JarraCristal.png'},
]