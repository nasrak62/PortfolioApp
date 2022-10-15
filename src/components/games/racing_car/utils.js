import Point, { OffsetPoint } from './point';

export const lerp = (start, end, count) => {
  return start + (end - start) * count;
};

export const drawLine = (ctx, start, end) => {
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.stroke();
};

export const drawPolygon = (ctx, firstPoint, remainingPoints) => {
  ctx.beginPath();
  ctx.moveTo(firstPoint.x, firstPoint.y);

  remainingPoints.forEach((point) => {
    ctx.lineTo(point.x, point.y);
  });

  ctx.fill();
};

export const getIntersection = (A, B, C, D) => {
  const tTop = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x);
  const uTop = (C.y - A.y) * (A.x - B.x) - (C.x - A.x) * (A.y - B.y);
  const bottom = (D.y - C.y) * (B.x - A.x) - (D.x - C.x) * (B.y - A.y);

  if (bottom === 0) {
    return null;
  }

  const t = tTop / bottom;
  const u = uTop / bottom;

  const canGetValue = t >= 0 && t <= 1 && u >= 0 && u <= 1;
  const x = lerp(A.x, B.x, t);
  const y = lerp(A.y, B.y, t);
  const offset = t;

  return canGetValue ? new OffsetPoint(x, y, offset) : null;
};

const calculateInnerAlpha = (angle, alpha, action, addPI = false) => {
  let innerAlpha = null;
  const add = angle + alpha;
  const subtract = angle - alpha;

  innerAlpha = action === '+' ? add : subtract;

  if (addPI) {
    innerAlpha += Math.PI;
  }

  return innerAlpha;
};

export const calculatePoint = (
  startX,
  startY,
  angle,
  alpha,
  action,
  rad,
  addPI = false,
) => {
  const innerAlpha = calculateInnerAlpha(angle, alpha, action, addPI);
  const x = startX - Math.sin(innerAlpha) * rad;
  const y = startY - Math.cos(innerAlpha) * rad;

  return new Point(x, y);
};

export const polysIntersect = (poly1, poly2) => {
  for (let i = 0; i < poly1.length; i++) {
    for (let j = 0; j < poly2.length; j++) {
      const index1 = (i + 1) % poly1.length;
      const index2 = (j + 1) % poly2.length;

      const touch = getIntersection(
        poly1[i],
        poly1[index1],
        poly2[j],
        poly2[index2],
      );

      if (touch) {
        return true;
      }
    }
  }

  return false;
};
