/**
 * @fileoverview a simple project
 */

/// <reference path="components/project-input.ts" />
/// <reference path="components/project-item.ts" />
/// <reference path="components/project-list.ts" />

namespace App {

  const proj = (function () {
    return {
      init() {
        new ProjectInput();
        new ProjectList('active');
        new ProjectList('finished');
      }
    }
  })();

  proj.init();
}
