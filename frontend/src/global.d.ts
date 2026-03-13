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

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

declare module 'react/jsx-dev-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

export {};  // Ensure this file is treated as a module so the augmentation applies globally.
