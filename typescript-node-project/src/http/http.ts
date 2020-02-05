/**
 * @fileoverview http post data in JSON format
 */
import { request, IncomingMessage, ClientRequest, RequestOptions } from "http";

export const addPost = (todoText: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      text: todoText
    });
    const options: RequestOptions = {
      hostname: 'some-host-name',
      port: 123,
      path: '/todos',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      }
    };
    const req: ClientRequest = request(options, (res: IncomingMessage) => {
      const chunks: Uint8Array[] = [];
      res.on('data', chunk => {
        chunks.push(chunk);
      });
      res.on('end', () => {
        const message = Buffer.concat(chunks).toString();
        resolve(message);
      });
    });
    req.write(data);
    req.on('error', (err: Error) => {
      reject(err.message);
    })
    req.end();
  });
}
