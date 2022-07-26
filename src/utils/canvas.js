import Star from './star';
import { randomRange } from './math';

const STARS_NUMBER = 200;
const MAX_RADIUS = 40;
const MAX_SPEED = 5;

export const createCanvas = (canvas) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas?.getContext('2d');

  const stars = init(ctx, canvas);

  return animate(stars, ctx, canvas);
};

const animate = (stars, ctx, canvas) => {
  const animationId = window.requestAnimationFrame(() =>
    animate(stars, ctx, canvas),
  );

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars = stars.map((star) => {
    if (star.explosionEnded) {
      return createStar(ctx, canvas, 'moving');
    }

    return star;
  });

  stars.forEach((star) => {
    star.update();
  });

  return animationId;
};

const createStar = (ctx, canvas, type) => {
  const speed = type === 'moving' ? randomRange(1, MAX_SPEED) : 0;

  const radius = randomRange(1, MAX_RADIUS);
  const x = randomRange(radius, canvas.width);
  const y = randomRange(radius, canvas.height / 4);

  return new Star(x, y, radius, '#ffffff', ctx, canvas, speed);
};

const createStarByIndex = (ctx, canvas, index) => {
  if (index <= (2 * STARS_NUMBER) / 3) {
    return createStar(ctx, canvas, 'still');
  }

  return createStar(ctx, canvas, 'moving');
};

const init = (ctx, canvas) => {
  let stars = [];

  for (let i = 0; i <= STARS_NUMBER; i++) {
    const star = createStarByIndex(ctx, canvas, i);

    stars.push(star);
  }

  return stars;
};
