import Controller from '@ember/controller';

/**
 * See RFCs
 *  - https://github.com/emberjs/rfcs/pull/712/
 *  - https://github.com/emberjs/rfcs/pull/715/
 *
 *  After 715, this file may be deleted
 */
export default class ApplicationController extends Controller {
  queryParams = [
    // Code
    't',

    // Maximize / Minimize of the Editor
    // "min" | "max"
    'editor',

    // Normally the editor will load automatically upon detecting
    // activity -- this is to optimize page-load (as editors can be heavy
    // when fully featured)
    //
    // when this is 'true', the user will have to click a button to start editing.
    // This can be useful when limber is embedded for code samples on documentation sites
    // where the primary use case is reading, rather than tinkering.
    'noAutoEditor',

    // This is the file format to use for the editor.
    //
    // Supported
    //  - glimdown (default)
    //  - gjs
    //  - hbs
    'format',
  ];
}
