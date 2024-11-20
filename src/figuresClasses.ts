export interface Figure {
  shape: string;
  color: string;
}

export class Triangle implements Figure {
  a: number;

  b: number;

  c: number;

  shape: string = 'triangle';

  color: string;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of some value is less than 0');
    }

    const arrSides = [a, b, c].sort((one: number, two: number) => two - one);
    const maxSide = arrSides[0];
    const sumSides = arrSides[1] + arrSides[2];

    if (maxSide >= sumSides) {
      throw new Error(`${maxSide} of triangle >= than a sum of two others`);
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(
      2,
    );
  }
}
export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Length of some value is less than 0');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.pow(this.radius, 2) * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Length of some value is less than 0');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return +(this.height * this.width).toFixed(2);
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
