import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(Users) private userRepository: Repository<Users>, private jwt: JwtService) { }

    async signup(user: Users): Promise<Users> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash
        return await this.userRepository.save(user);
    }

    async validateUser(username: string, password: string): Promise<any> {
        const foundUser = await this.userRepository.findOne({ username });
        if (foundUser) {
            if (await bcrypt.compare(password, foundUser.password)) {
                const { password, ...result } = foundUser
                return result;
            }

            return null;
        }
        return null

    }
    async login(user: any) {
        const payload = { username: user.username, sub: user.id, role:user.role };

        return {
            access_token: this.jwt.sign(payload),
        };
    }
}
