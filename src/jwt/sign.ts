import { generateSignature } from "./generateSignature";

interface ISignOptions {
  data: Record<string, unknown>;
  exp: number;
  secret: string;
}

export function sign({ data, exp, secret }: ISignOptions) {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload = {
    ...data,
    iat: Date.now(),
    exp,
  };

  console.log("payload: ", payload);

  const headerBase64 = Buffer.from(JSON.stringify(header)).toString("base64");
  console.log("headerBase64: ", headerBase64);

  const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString(
    "base64url"
  );

  const signature = generateSignature({
    header: headerBase64,
    payload: payloadBase64,
    secret,
  });

  return `${headerBase64}.${payloadBase64}.${signature}`;
}
