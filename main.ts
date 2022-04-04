import init, {
  fibonacci as fibonacciWasm,
} from "./rs_helpers_wasm/pkg/rs_helpers_wasm.js";

await init();

function fibonacci(x: number): number {
  if (x === 0) {
    return 0;
  }

  if (x === 1) {
    return 1;
  }

  return fibonacci(x - 1) + fibonacci(x - 2);
}

const FIBONACCI_NUMBER = 42;

function timeJs() {
  console.time("js");
  console.log(fibonacci(FIBONACCI_NUMBER));
  console.timeEnd("js");
}

timeJs();

function timeRs() {
  console.time("wasm");
  console.log(fibonacciWasm(FIBONACCI_NUMBER));
  console.timeEnd("wasm");
}

timeRs();
