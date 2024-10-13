import { UserDTO } from './dto/user.dto';
import { Injectable } from "@nestjs/common";
import { FindOneOptions, Repository } from "typeorm";
import { User } from "./entity/auth.entity";
import { InjectRepository } from "@nestjs/typeorm";

// 진짜 entity 건드리는 부분 (repository)
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findByFields(options:FindOneOptions<UserDTO>):Promise<UserDTO | undefined> {
        return await this.userRepository.findOne(options);
    }

    async save(userDTO: UserDTO):Promise<UserDTO | undefined> {
        return await this.userRepository.save(userDTO)
    }

}