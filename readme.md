# SimpleJWT - Geração e Verificação de Tokens JWT

Este é um projeto de estudo que oferece uma implementação simples de geração e verificação de tokens JWT em JavaScript/TypeScript. Embora seja destinado apenas para fins educacionais e não seja recomendado para uso em produção, ele pode ser uma ótima fonte de aprendizado para entender como os tokens JWT funcionam.

## Funcionalidades

- Gere facilmente tokens JWT com uma chave secreta.
- Verifique a autenticidade e validade dos tokens gerados.

## Uso

Aqui estão alguns exemplos de como usar esta biblioteca:

### Geração de Token

```javascript
import { sign } from "./jwt/sign";

const secret = "SuaChaveSecreta";
const token = sign({
  exp: Date.now() + 24 * 60 * 60 * 1000,
  data: {
    sub: "@minozzzi",
  },
  secret,
});

console.log("Token gerado:", token);
```

### Verificação de Token

```javascript
import { verify } from "./jwt/verify";

const secret = "SuaChaveSecreta";
const token = "SeuTokenJWTAqui";

try {
  const decoded = verify({ token, secret });
  console.log("Token válido. Dados decodificados:", decoded);
} catch (error) {
  console.error("Erro ao verificar o token:", error.message);
}
```

## Contribuição

Este projeto é apenas um estudo de caso e não aceita contribuições externas. No entanto, sinta-se à vontade para explorar e aprender com o código-fonte.
