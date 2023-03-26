import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt/dist';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  //signUp function
  async signUp(signUpDTO: SignUpDto): Promise<{}> {
    const { name, email, password } = signUpDTO;

    const oldUser = await this.userModel.findOne({ email });
    if (oldUser) {
      throw new BadRequestException(
        'Email already exists! try with an other one please!',
      );
    }

    const hashedPassword = await bcrypt.hash(password, 16);

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token: string = this.jwtService.sign({
      id: user._id,
      name: user.name,
    });
    return { token };
  }

  //signIn function
  async signIn(signInDTO: SignInDto): Promise<{}> {
    const { email, password } = signInDTO;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException(' Invalid email please try again !');
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      throw new UnauthorizedException(' Invalid password please try again !');
    }

    const token: string = this.jwtService.sign({
      id: user._id,
      name: user.name,
    });

    return  token ;
  }
}
