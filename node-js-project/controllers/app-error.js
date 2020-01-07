/**
 * @fileoverview App error controller
 */
function pageNotFound(req, res, next) {
  res.status(404).render('page-not-found.ejs', {
    pageTitle: 'Page not found',
    path: '',
  });
}

module.exports.pageNotFound = pageNotFound;