import { HttpHeaders } from '@angular/common/http';

/**
 * Common Http Headers
 * @param userId
 */
export function commonHttpHeaders(userId: number): HttpHeaders {
  const headers = new HttpHeaders(
    {
      'USERID': userId.toString(),
      'Content-Type': 'application/json; charset=utf-8'
    }
  );
  return headers;
}
