import { AuthService } from './auth.service';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signUpDTO: SignUpDto): Promise<{}> {
    return this.authService.signUp(signUpDTO);
  }

  @Get('/signin')
  signIn(@Body() signInDTO: SignInDto): Promise<{}> {
    return this.authService.signIn(signInDTO);
  }
}
