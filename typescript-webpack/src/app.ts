/**
 * @fileoverview a simple project
 */

import { ProjectList } from "./components/project-list";
import { ProjectInput } from "./components/project-input";

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
