import { MiddlewareFn } from "type-graphql";
import { verify } from "jsonwebtoken";
import 'dotenv/config';

export interface Context {
  req: Request;
  res: Response;
  payload?: { userId: string };
}


export const isAuth: MiddlewareFn<Context> = ({ context }, next) => {
  const authorization = context.req.headers["authorization"];
  if (!authorization) {
    throw new Error("Not authenticated");
  }

  try {
    const token = authorization.split(" ")[1];

    console.log(`token:::::: ${token}`)

    const payload = verify(token, process.env.PRIVATE_KEY);
    console.log(payload);
    context.payload = payload as any;
  } catch (err) {
    console.log(err);
    throw new Error("Not authenticated");
  }
  return next();
};