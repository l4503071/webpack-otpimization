import { testA } from '../components/CA';
export function square(x) {
  console.log('square')
  return x * x
}

export function cube(x) {
  console.log('cube')
  return testA(x);
}