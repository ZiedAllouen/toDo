import { JwtService } from '@nestjs/jwt/dist';
import { AuthService } from './auth.service';
import { Controller, Post, Body, Get, Res,Req } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';
import { Response,Request } from 'express';
import { UnauthorizedException } from '@nestjs/common/exceptions/unauthorized.exception';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService,
    private readonly jwtService: JwtService,) {}

  @Post('/signup')
  signUp(@Body() signUpDTO: SignUpDto): Promise<{}> {
    return this.authService.signUp(signUpDTO);
  }

  @Get('/signin')
  async signIn(@Body() signInDTO: SignInDto,@Res({passthrough:true}) response:Response) {
    try {
      const token = await this.authService.signIn(signInDTO);
      response.cookie('jwt', token, { httpOnly: true });
      return { message: 'success' };
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  @Get('/user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);
      return data;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  @Post('/logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');
    return { message: 'success' };
  }


}
