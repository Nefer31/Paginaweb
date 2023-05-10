var maxParticleCount=150;
var particleSpeed=2;
var startConfetti;
var stopConfetti;
var toggleConfetti;
var removeConfetti;
(function () {
  startConfetti = startConfettiInner;
  stopConfetti = stopConfettiInner;
  toggleConfetti = toggleConfettiInner;
  removeConfetti = removeConfettiInner;
  
  var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"];
  var streamingConfetti = false;
  var animationTimer = null;
  var particles = [];
  var waveAngle = 0;

  function resetParticle(particle, width, height) {
    particle.color = colors[(Math.random() * colors.length) | 0];
    particle.x = Math.random() * width;
    particle.y = Math.random() * height - height;
    particle.diameter = Math.random() * 10 + 5;
    particle.tilt = Math.random() * 10 - 10;
    particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
    particle.tiltAngle = 0;
    return particle;
  }

  function startConfettiInner() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    window.requestAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 100);
      };

    var canvas = document.getElementById("confetti-canvas");
    if (canvas === null) {
      canvas = document.createElement("canvas");
      canvas.setAttribute("id", "confetti-canvas");
      canvas.setAttribute("style", "position: fixed; top: 0; left: 0; z-index: 0; pointer-events: none; z-index: 34;");
      document.body.appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
      window.addEventListener(
        "resize",
        function () {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        },
        true
      );
    }

    var context = canvas.getContext("2d");

    while (particles.length < maxParticleCount) particles.push(resetParticle({}, width, height));

    streamingConfetti = true;

    if (animationTimer === null) {
      (function runAnimation() {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        if (particles.length === 0) animationTimer = null;
        else {
          updateParticles();
          drawParticles(context);
          animationTimer = requestAnimFrame(runAnimation);
        }
      })();
    }
  }

  function stopConfettiInner() {
    streamingConfetti = false;
  }

  function removeConfettiInner() {
    stopConfetti();
    particles = [];
  }

  function toggleConfettiInner() {
    if (streamingConfetti) stopConfettiInner();
    else startConfettiInner();
  }

  function drawParticles(context) {
    var particle;
    var x;
  }
  
function drawParticles(context){var particle;var x;for(var i=0;i<particles.length;i++){particle=particles[i];context.beginPath();context.lineWidth=particle.diameter;context.strokeStyle=particle.color;x=particle.x+particle.tilt;context.moveTo(x+particle.diameter/2,particle.y);context.lineTo(x,particle.y+particle.tilt+particle.diameter/2);context.stroke();}}

function updateParticles(){var width=window.innerWidth;var height=window.innerHeight;var particle;waveAngle+=0.01;for(var i=0;i<particles.length;i++){particle=particles[i];if(!streamingConfetti&&particle.y<-15)
particle.y=height+100;else{particle.tiltAngle+=particle.tiltAngleIncrement;particle.x+=Math.sin(waveAngle);particle.y+=(Math.cos(waveAngle)+particle.diameter+particleSpeed)*0.5;particle.tilt=Math.sin(particle.tiltAngle)*15;}
if(particle.x>width+20||particle.x<-20||particle.y>height){if(streamingConfetti&&particles.length<=maxParticleCount)
resetParticle(particle,width,height);else{particles.splice(i,1);i--;}}}}})();
// Agregar eventos a las tarjetas del blog
var tarjetas = document.querySelectorAll(".caja.tarjeta");

tarjetas.forEach(function (tarjeta) {
  tarjeta.addEventListener("mouseenter", function (event) {
    var boundingRect = tarjeta.getBoundingClientRect();
    var x = boundingRect.left + boundingRect.width / 2;
    var y = boundingRect.top + boundingRect.height / 2;
    startExplosion(x, y);
  });

  tarjeta.addEventListener("mouseleave", stopConfettiInner);
});

function startExplosion(x, y) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var explosionParticles = [];

  // Crear partículas de confetti para la explosión
  for (var i = 0; i < maxParticleCount; i++) {
    var particle = resetParticle({}, x, y);
    explosionParticles.push(particle);
  }

  // Ejecutar la animación de la explosión
  (function runExplosionAnimation() {
    context.clearRect(0, 0, width, height);

    for (var i = 0; i < explosionParticles.length; i++) {
      var particle = explosionParticles[i];

      if (particle.y > height || particle.x < 0 || particle.x > width) {
        explosionParticles.splice(i, 1);
        i--;
        continue;
      }

      particle.tiltAngle += particle.tiltAngleIncrement;
      particle.x += Math.sin(waveAngle);
      particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
      particle.tilt = Math.sin(particle.tiltAngle) * 15;

      context.beginPath();
      context.lineWidth = particle.diameter;
      context.strokeStyle = particle.color;
      var xWithTilt = particle.x + particle.tilt;
      context.moveTo(xWithTilt + particle.diameter / 2, particle.y);
      context.lineTo(xWithTilt, particle.y + particle.tilt + particle.diameter / 2);
      context.stroke();
    }

    if (explosionParticles.length > 0) {
      requestAnimationFrame(runExplosionAnimation);
    }
  })();
}
