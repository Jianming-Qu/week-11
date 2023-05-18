
class Particle {
    constructor(xPos, yPos, radius) {
      this.x = xPos;
      this.y = yPos;
      this.r = radius;
      this.svgElement;
      this.animDuration = randomNum(3, 5);
      this.targetX = randomNum(0, window.innerWidth);
      this.targetY = randomNum(0, window.innerHeight);
  
    }
    

    drawParticle() {
      this.svgElement = makeCircle(this.x, this.y, this.r);
      const svg = document.getElementById("base-svg");
      svg.appendChild(this.svgElement);
      this.addAnimateX();
      this.addAnimateY();
    }
 
    addAnimateX() {
      let animElement = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
      animElement.setAttribute('attributeName', 'cx');
      animElement.setAttribute('values', `${this.x}; ${this.targetX};`);
      animElement.setAttribute('dur', `${this.animDuration}`);
      animElement.setAttribute('repeatCount', 'indefinite');
      this.svgElement.appendChild(animElement);
    }

    addAnimateY() {
      let animElement = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
      animElement.setAttribute('attributeName', 'cy');
      animElement.setAttribute('values', `${this.y}; ${this.targetY};`);
      animElement.setAttribute('dur', `${this.animDuration}`);
      animElement.setAttribute('repeatCount', 'indefinite');
      this.svgElement.appendChild(animElement);
    }
  
  }
  

  function createParticlesArray(num) {
    let particleInstances = [];
  
    for (let i = 0; i < num; i++) {
      let particleX = window.innerWidth/2;
      let particleY = window.innerHeight/2;
      let particleSize = randomNum(window.innerWidth * 0.001, window.innerWidth * 0.005);
      particleInstances.push(new Particle(particleX, particleY, particleSize));
    }
  
    return particleInstances;
  }
window.addEventListener('resize', () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  const svg = document.getElementById("base-svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.innerHTML = '';
  let particles = createParticlesArray(50);
  for (let particle of particles) {
      particle.drawParticle();
  }
  
});

window.dispatchEvent(new Event('resize'));


  