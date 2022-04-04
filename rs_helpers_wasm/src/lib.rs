use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(x: isize) -> isize {
    if x == 0 {
        return 0;
    }

    if x == 1 {
        return 1;
    }

    return fibonacci(
      x - 1) + fibonacci(x - 2);
}