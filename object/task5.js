// 5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.

class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    calculateVolume() {
      const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
      return volume.toFixed(4); 
    }
  }
  const cylinder = new Cylinder(5, 10); 
  
  const volume = cylinder.calculateVolume();
  console.log('Volume of the cylinder:', volume); 
  