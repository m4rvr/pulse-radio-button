/**
 * `@types/gsap` is included but outdated for import usage with `gsap/all`
 * So this file fixes the type-check until it will be fixed by `@types/gsap` itself
 */
declare module 'gsap/all' {
  import gsap from 'gsap';
  export = gsap;
}
