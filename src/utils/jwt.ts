import jwt, { SignOptions } from 'jsonwebtoken';
import IUserLogin from '../banking/interfaces/IUserLogin';

const JWT_SECRET = String(process.env.JWT_SECRET);

export default class TokenAuthentication {
  private jwtConfig: SignOptions;

  constructor() {
    this.jwtConfig = {
      expiresIn: '15m',
      algorithm: 'HS256',
    };
  }

  public generateJWTToken(payload: IUserLogin): string {
    return jwt.sign({ payload }, JWT_SECRET, this.jwtConfig);
  }
}
