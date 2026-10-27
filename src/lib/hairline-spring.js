/*
 * Spring integrator adapted from Hairline's core/motion.ts:
 * https://github.com/lucasmarkes/hairline
 *
 * MIT License
 * Copyright (c) 2026 Lucas Marques
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export function spring(x, { k = 100, c = 18, m = 1, eps = .01 } = {}) {
  return { x, v:0, t:x, k, c, m, eps };
}

// Substeps keep the same response on slow frames. Retargeting retains velocity.
export function stepSpring(state, dt) {
  const count = Math.max(1, Math.ceil(dt * 240));
  const step = dt / count;
  for (let index = 0; index < count; index += 1) {
    const acceleration = (-state.k * (state.x - state.t) - state.c * state.v) / state.m;
    state.v += acceleration * step;
    state.x += state.v * step;
  }
  if (Math.abs(state.x - state.t) < state.eps && Math.abs(state.v) < state.eps * 10) {
    state.x = state.t;
    state.v = 0;
    return false;
  }
  return true;
}
