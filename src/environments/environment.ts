// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  basedUrlBackendUser: 'https://backendass3.herokuapp.com/albarrmart',
  basedUrlBackendProductList:
    'https://backendass3.herokuapp.com/albarrmart/listItem',
  basedUrlBackendProductPilihan:
    'https://backendass3.herokuapp.com/albarrmart/listItem/productpilihan2',
  basedUrlBackendProductPilihan2:
    'https://backendass3.herokuapp.com/albarrmart/listItem/productpilihan',
  basedUrlBackendDetailProduct:
    'https://backendass3.herokuapp.com/albarrmart/detailItem/',
  basedUrlBAckendCart:
    'https://backendass3.herokuapp.com/albarrmart/masukkanKeranjang',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
