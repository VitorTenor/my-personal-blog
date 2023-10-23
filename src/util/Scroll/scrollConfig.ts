export default function smoothScroll(target: string, duration: number): void {
  const targetElement: Element | null = document.querySelector(target);
  if (!targetElement) return;

  const targetPosition: number =
    targetElement.getBoundingClientRect().top + window.scrollY;
  const startPosition: number = window.scrollY;
  const distance: number = targetPosition - startPosition;
  const startTime: number = performance.now();

  function ease(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  function scroll(currentTime: number): void {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime >= duration) {
      window.scrollTo(0, targetPosition);
      return;
    }
    window.scrollTo(0, ease(elapsedTime, startPosition, distance, duration));
    requestAnimationFrame(scroll);
  }

  requestAnimationFrame(scroll);
}
