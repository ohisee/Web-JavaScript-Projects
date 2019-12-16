/**
 * @fileoverview Error page
 */
import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div>
      <h3>Oops, 404 Page Not Found</h3>
      <p>Try <Link href="/"><a>going back</a></Link></p>
      <style jsx>{`
        h3 {
          color: #2f6ae7;
        }
      `}</style>
    </div>
  )
};

export default ErrorPage;
