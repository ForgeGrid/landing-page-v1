/**
 * Global type declarations for the ForgeGrid landing page
 */

declare module '*.glb';
declare module '*.png';
declare module '*.svg';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}