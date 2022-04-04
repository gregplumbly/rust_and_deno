run:
	deno run --allow-read main.ts
build_wasm:
	cd rs_helpers_wasm && wasm-pack build --target web